import React, { useEffect, useState } from 'react'
import { Navigation } from '../Navigation/Navigation'
import './Home.css'
import { IS_USER_LOGGED_IN, USER_DATA, userListingURL } from '../../utils/Constant'
import { Outlet , useNavigate } from 'react-router-dom'
import  ImageUtils  from '../../utils/ImageUtils'

export const Home = () => {
  const [userData, setUserData] = useState({})
  const [popUp, setPopUp] = useState(false)
  const [userListing, setUserListing] = useState([])
  const [showChat,setShowChat] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(window.sessionStorage.getItem(USER_DATA))
    setUserData(user)
  },[])

  useEffect(() => {
    fetchListingData()
},[])

  const logout = () => {
    window.sessionStorage.removeItem(IS_USER_LOGGED_IN)
    navigate(0)
  }

  const userChange = (userData) => {
    window.sessionStorage.setItem(USER_DATA,JSON.stringify(userData))
    window.sessionStorage.setItem("geo",JSON.stringify(userData.address.geo))
    window.sessionStorage.setItem(IS_USER_LOGGED_IN,true)
    navigate(0)
  }

  const fetchListingData = () => {
    fetch(userListingURL)
    .then((response) => response.json())
    .then((list) => {
        setUserListing(list.users)
    })
}

  return (
    <div>
      <div className='nav-profile'>
        <Navigation className="navigation-comp" />
        <div className='content-div'>
          <div className='title-div'>
            <h2>{"Profile"}</h2>
            <div className='user-data-container' onClick={(e) => {setPopUp(prev => !prev)}}>
              <img src={userData.profilepicture} alt='user'/>
              <h1>{userData.name}</h1>
            </div>
            <div className='screen-popup' style={{display: popUp ? "block": "none"}} onClick={(e) => {setPopUp(prev => !prev)}}>
              <div className='home-popup'>
                <div className='home-profile-user'>
                  <img src={userData.profilepicture} className='profile-icon' alt='user'/>
                  <h1>{userData.name}</h1>
                  <p className='user-email'>{userData.email}</p>
                </div>
                <div className='user-list'>
                  {userListing && userListing.filter((data) => data.id > 8 ).map(value => 
                    <div className='user-list-data' onClick={(e) => {userChange(value)}}>
                      <img src={value.profilepicture} className='profile-user-icon' alt='user'/>
                      <h1>{value.name}</h1>
                    </div>
                  )}
                </div>
                <button className='signout-btn' onClick={() => logout()} > Sign out</button>
              </div>
            </div>
          </div>
          <div>
            <Outlet context={userData} />
          </div>
        </div>
      </div>
      <div className='chats'>
        <div className='chat-icon' onClick={(e) => setShowChat(pre => !pre)}>
          <img src={ImageUtils.ChatIcon} alt='chat' />
          <h1>chats</h1>
          <img src={ImageUtils.DownArrow} alt='down' />
        </div>
        <div className='chat-list' style={{display: showChat? "block": "none"}}>
        { userListing && userListing.map(value => 
          <div className='user-chat-list' onClick={(e) => {}}>
            <img src={value.profilepicture} className='user-chat-img' alt='user'/>
            <h1>{value.name}</h1>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
