import React from 'react'

export default function NhdFuncComp(props)  {
    return (
      <div>
        <h2>Demo:Function Component props</h2>
        <p>lấy dữ liệu từ props để hiển thị</p>
        <p>Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>company: {props.company}</p>
        <p>Note: {props.note}</p>
      </div>
    )
  }


