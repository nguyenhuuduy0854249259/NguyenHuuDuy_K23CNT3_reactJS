import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NhdNavNar from './components/NhdNavNar';
import NhdHome from './components/NhdHome';
import NhdAbout from './components/NhdAbout';
import NhdContact from './components/NhdContact';
import NhdListUser from './components/NhdLitUser';
import NhdFormUser from './components/NhdFormUser';

export default function NhdApp() {

  const listUsers = [
    {id:"SV001", nhdFullName:"Nguyễn Hứu Duy", nhdUserName:"DuyNguyen", nhdPass:"123456"},
    {id:"SV002", nhdFullName:"Nguyễn Văn Duy", nhdUserName:"DuyVan", nhdPass:"123456342"}
  ]

  const[nhdUsers, setNhdUsers] = useState(listUsers)

  // hàm sử lý sự kiện mới
  const nhdHandleAdd = (nhdParam)=>{
    console.log("nhdHandleAdd:", nhdParam);

    setNhdUsers(prev =>{
      return[
        ...prev,
        nhdParam
      ]
    })
  }

  return (
    <div className='container border my-3'>
      <h1>React Router DOM - Demo - [Nguyễn Hữu Duy - K23CNT3]</h1>
      <hr />

      <Router> {/* Chỉ bọc 1 lần */}
        <NhdNavNar />
        <Routes> {/* Dùng <Routes> thay vì <Router> */}
          <Route path='/' element={<NhdHome />} />
          <Route path='/about' element={<NhdAbout />} />
          <Route path='/contact' element={<NhdContact />} />
          <Route path='/list-user' element={<NhdListUser renderNhdUsers={nhdUsers}/>} />
          <Route path='/create-user' element={<NhdFormUser onNhdAddNew={nhdHandleAdd}/>} />
        </Routes>
      </Router>
    </div>
  );
}
