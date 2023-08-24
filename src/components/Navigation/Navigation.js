import React, { useEffect, useState } from 'react'
import { GALLERY, POSTS, PROFILE, TODO } from '../../utils/Constant'
import "./Navigation.css"
import { Link } from 'react-router-dom'

export const Navigation = (props) => {

    const [route, setRoute] = useState("PROFILE")
    useEffect(() => {
      setRoute( (window.location.href).toUpperCase())
    },[window.location.href])

    const selectedStyle = (pageName) => {
        return (route.includes(pageName))? {
            color: "white",
            }: null
    }

return (
    <div className='navigation-div'>
        <nav>
            <ul className='nav-ul-list'>
                <li className="nav-list"><Link className='nav-link' to={"profile"} style={selectedStyle(PROFILE)}>Profile</Link></li>
                <li className="nav-list"><Link className='nav-link' to={"posts"} style={selectedStyle(POSTS)}>Posts</Link></li>
                <li className="nav-list"><Link className='nav-link' to={"gallery"} style={selectedStyle(GALLERY)}>Gallery</Link></li>
                <li className="nav-list nav-list-last"><Link className='nav-link' to={"todo"} style={selectedStyle(TODO)}>ToDo</Link></li>
            </ul>
        </nav>

    </div>
    )
}
