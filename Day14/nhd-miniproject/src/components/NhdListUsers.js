import React from 'react'
import { useState, useEffect } from "react"; // Import React hooks
import axios from "axios"; // Import axios for API calls


export default function NhdListUsers() {

// Khởi tạo state 
const [nhdListUser, setNhdListUser] = useState([]);

// API
const nhdApiOnline = "https://67da815235c87309f52ccf0d.mockapi.io/k23cnt3_nguyenhuuduy/nhd_users";

// Đọc dữ liệu từ API bằng axios
useEffect(() => {
    axios
        .get(nhdApiOnline)
        .then((nhd_response) => {
            setNhdListUser(nhd_response.data);
        })
        .catch((error) => {
            console.error("Lỗi phát sinh:", error);
        });
}, []);

// Render danh sách
const nhdElementUser = nhdListUser.map((nhd_item, index) => {
    return (
        <tr key={nhd_item.nhdId || index}>
            <td>{nhd_item.nhdId}</td>
            <td>{nhd_item.nhdFullName}</td>
            <td>{nhd_item.nhdEmail}</td>
            <td>{nhd_item.nhdPhone}</td>
            <td>{nhd_item.nhdActive ? 'Hoạt động' : 'Khóa'}</td>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        </tr>
    );
});


  return (
    <div className='alert alert-danger'>
            <h2>Danh sách</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {nhdElementUser}
                </tbody>
            </table>
        </div>
  )
}
