import React, { useEffect, useState } from 'react'
import "./LandingPage.css"
import ImageUtils from '../../utils/ImageUtils'
import { userListingURL, IS_USER_LOGGED_IN, USER_DATA } from '../../utils/Constant'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {

    //fetch listing data at first
    useEffect(() => {
        fetchListingData()
    },[])

    const [userListing, setUserListing] = useState([]) //listing data state
    const navigate = useNavigate();

    //fetch listing data from api
    const fetchListingData = () => {
        fetch(userListingURL)
        .then((response) => response.json())
        .then((list) => {
            setUserListing(list)
        })
    }

    //navigate with data
    const userSelected = (userData) => {
        window.sessionStorage.setItem(USER_DATA,userData)
        window.sessionStorage.setItem(IS_USER_LOGGED_IN,true)
        console.log(userData)
        console.log(window.sessionStorage.getItem(IS_USER_LOGGED_IN))
        navigate("/home")
    }

  return (
    <div>
        <div className="landing-background-img"> {/* Landing page background image  */}
            <img src={ImageUtils.LandingBackground} />
        </div>

        <div className='Select-account-container'> {/*users account list card  */}
            <h1 className='selection-title'>Select an account</h1>
            <div className='account-listing'>
                {userListing.users && userListing.users.map(data => (
                    <div onClick={e => userSelected(data)} className='listing-lines'>
                        <img src={data.profilepicture} alt="icon"/>
                        <h2>{data.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
