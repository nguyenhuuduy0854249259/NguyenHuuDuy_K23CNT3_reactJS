import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import NhdNavBar from './components/NhdNavBar';
import NhdListUser from './components/NhdListUser';
import NhdCreateUser from './components/NhdCreateUser';
import NhdEditUser from './components/NhdEditUser';
import NhdHome from './components/NhdHome';

export default function NhdApp() {
  return (
    <div>
      <div className="container border my-3">
        <h1>ReactJs - MockAPI - MiniProject - [Nguyễn Hữu Duy - K23CNT3]</h1>
        <hr />
        <NhdNavBar />
        <Routes> {/* ✅ Đã import, không còn lỗi */}
          <Route path="/create-user" element={<NhdCreateUser />} />
          <Route path="/edit-user/:id" element={<NhdEditUser />} />
          <Route path="/list-user" element={<NhdListUser />} />
          <Route path="/" element={<NhdHome />} />
        </Routes>
      </div>
    </div>
  );
}
