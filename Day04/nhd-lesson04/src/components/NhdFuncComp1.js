import React from 'react'

export default function NhdFuncComp1(props) {
  return (
    <div>
        <h2>Props is Object</h2>
        <p>Info:</p>
        <p>fullname: {props.renderinfo.fullname}</p>
        <p>Age: {props.renderinfo.age}</p>
        <p>Phone: {props.renderinfo.phone}</p>
    </div>
  )
}
