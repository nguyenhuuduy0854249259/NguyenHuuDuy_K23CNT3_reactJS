import React from 'react'

export default function NhdLitUser({renderNhdUsers}) {


    const nhdElements = renderNhdUsers.map((nhdItem, index)=>{
        return(
        <>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{nhdItem.id}</td>
            <td>{nhdItem.nhdFullName}</td> 
            <td>{nhdItem.nhdUserName}</td> 
            <td>{nhdItem.nhdPass}</td> 
        </tr>
        </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Pass</th>
                </tr>
            </thead>
            <tbody>
                {nhdElements}
            </tbody>
        </table>
    </div>
  )
}
