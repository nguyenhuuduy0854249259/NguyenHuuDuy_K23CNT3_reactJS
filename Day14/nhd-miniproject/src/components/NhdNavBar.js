            // THANH ĐIỀU HƯỚNG
import React from 'react'
import {Link} from 'react-router-dom'


export default function NhdNavBar() {
  return (
    <div>
        <ul>
            <Link to={"/"} >Home</Link>|
            <Link to={"/users"} > Danh sách users</Link>|
            <Link to={"/create-user"} > Thêm mới users</Link>
            
        </ul>
    </div>
  )
}
