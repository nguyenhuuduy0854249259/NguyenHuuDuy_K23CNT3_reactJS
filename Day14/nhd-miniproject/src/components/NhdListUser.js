import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NhdListUser() {
    const [nhdListUser, setNhdListUser] = useState([]); // State để lưu danh sách người dùng

    // URL API lấy dữ liệu người dùng
    const nhdAPIOnline = "https://67da815235c87309f52ccf0d.mockapi.io/k23cnt3_nguyenhuuduy/nhd_users";

    // Lấy dữ liệu từ API bằng axios
    useEffect(() => {
        axios
            .get(nhdAPIOnline)
            .then((response) => {
                setNhdListUser(response.data);
            })
            .catch((error) => {
                console.log("Lỗi", error);
            });
    }, []);

    // Hàm xử lý xóa người dùng
    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
            axios
                .delete(`${nhdAPIOnline}/${id}`)
                .then(() => {
                    setNhdListUser(nhdListUser.filter(user => user.id !== id));
                })
                .catch((error) => {
                    console.error("Có lỗi khi xóa người dùng!", error);
                });
        }
    };

    // Duyệt qua danh sách người dùng và render từng người dùng trong một dòng của bảng
    const nhdElementUser = nhdListUser.map((nhdItem) => {
        return (
            <tr key={nhdItem.id}>
                <td>{nhdItem.id}</td> {/* Hiển thị ID người dùng */}
                <td>{nhdItem.nhd_name}</td> {/* Hiển thị Tên người dùng */}
                <td>{nhdItem.nhd_email}</td> {/* Hiển thị Email người dùng */}
                <td>{nhdItem.nhd_phone}</td> {/* Hiển thị Số điện thoại người dùng */}
                <td>
                    {/* Hiển thị trạng thái hoạt động với badge */}
                    <span className={`badge ${nhdItem.nhd_active ? 'bg-success' : 'bg-danger'}`}>
                        {nhdItem.nhd_active ? 'Hoạt động' : 'Khóa'}
                    </span>
                </td>
                <td>
                    {/* Nút chỉnh sửa */}
                    <Link to={`/edit-user/${nhdItem.id}`}>
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                    </Link>
                    {/* Nút xóa */}
                    <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => handleDelete(nhdItem.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <div className="container mt-4">
            <div className="alert alert-info">
                <h2>Danh sách người dùng</h2> {/* Tiêu đề */}
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped bg-white">
                    <thead className="table-light">
                        <tr>
                            <th>ID</th> {/* Cột ID */}
                            <th>Name</th> {/* Cột Tên */}
                            <th>Email</th> {/* Cột Email */}
                            <th>Phone</th> {/* Cột Phone */}
                            <th>Active</th> {/* Cột Trạng thái hoạt động */}
                            <th>Action</th> {/* Cột Hành động (Chỉnh sửa/Xóa) */}
                        </tr>
                    </thead>
                    <tbody>
                        {nhdElementUser} {/* Hiển thị danh sách người dùng */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
