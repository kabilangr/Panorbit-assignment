import React, { useEffect, useState } from 'react'
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import "./Profile.css"
import { USER_DATA } from '../../utils/Constant'

const Profile = (props) => {
    const [userData, setUserData] = useState({})
    const [geo,setGeo] = useState({
        lat:0,
        lng:0
    })

    useEffect(() => {
        const user = JSON.parse(window.sessionStorage.getItem(USER_DATA))
        setGeo(JSON.parse(window.sessionStorage.getItem("geo")))
        setUserData(user)
    },[])

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAlXy_Zc1RP3lO85sXZjHGI5LcjK9nKyiE",
        libraries: ["places"]
    })

return (
    <div className='profile-container'>
        <div className='profile-left-container'>
            <img className='profile-image' src={userData.profilepicture} alt='ima' />
            <h2>{userData.name}</h2>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"Username"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.username}</h3>
            </div>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"e-mail"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.email}</h3>
            </div>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"Phone"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.phone}</h3>
            </div>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"Website"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.website}</h3>
            </div>
            <div className='profile-view-line'></div>
            <h1 className='profile-company'>Company</h1>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"Name"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.company && userData.company.name}</h3>
            </div>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"catchphrase"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.company && userData.company.catchphrase}</h3>
            </div>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"bs"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.company && userData.company.bs}</h3>
            </div>
        </div>
        <div className='profile-right-container'>
            <h1 className='profile-company'>Address</h1>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"Street"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.address && userData.address.street}</h3>
            </div>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"Suite"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.address && userData.address.suite}</h3>
            </div>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"City"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data'>{userData.address && userData.address.city}</h3>
            </div>
            <div className='profile-details-container'>
                <h3 className='profile-details-list'>{"Zipcode"}</h3>
                <h3 className='profile-details-colon'>:</h3>
                <h3 className='profile-details-data bottom-spacing'>{userData.address && userData.address.zipcode}</h3>
            </div>
            
            {(!isLoaded)? <div>Loading...</div> :  
                <GoogleMap zoom={10} center={{ lat: 20, lng: 20 }} mapContainerClassName='map-container'>
                    <Marker position={{lat: geo.lat, lng: geo.lng}} />
                </GoogleMap>}
            <div className='company-map-data'>
                <div>
                    <h2>lat : </h2>
                    <h2>{geo.lat}</h2>
                </div>
                <div>
                    <h2>lng : </h2>
                    <h2>{geo.lng}</h2>
                </div>
            </div>
        </div>
    </div>
)
}

export default Profile