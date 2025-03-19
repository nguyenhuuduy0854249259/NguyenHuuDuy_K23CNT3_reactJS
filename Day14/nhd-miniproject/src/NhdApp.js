import React from 'react'
import NhdListUsers from "./components/NhdListUsers";
import NhdNavBar from "./components/NhdNavBar";

export default function NhdApp() {
  return (
    <div className='container border my-3 p-3 '>
      <h1>Nguyễn Hữu Duy - K23CNT3 - miniproject</h1>
      <NhdNavBar />
      <hr />
      <NhdListUsers />

    </div>
  )
}
