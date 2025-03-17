import React from 'react'
import {Link} from 'react-router-dom'


export default function NhdNavNar() {
  return (
    <div>
        <ul>
            <Link to={"/"} >Home</Link>|
            <Link to={"/about"} > About Us</Link>|
            <Link to={"/contact"} > contact</Link>|
            <Link to={"/list-user"} > List-user</Link>|
            <Link to={"/create-user"} > Create-user</Link>
        </ul>
    </div>
  )
}
