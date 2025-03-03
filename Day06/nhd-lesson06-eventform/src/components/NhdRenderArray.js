import React from 'react'

export default function NhdRenderArray() {

    const nhdNumbers = [10,20,30,40,50];
    const nhdElement = nhdNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {nhdElement}
    </div>
  )
}