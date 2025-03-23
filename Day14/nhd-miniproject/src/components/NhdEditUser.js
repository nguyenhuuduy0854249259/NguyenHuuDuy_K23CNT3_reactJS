import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NhdEditUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // API URL
  const nhdApiUrl = `https://67da815235c87309f52ccf0d.mockapi.io/k23cnt3_nguyenhuuduy/nhd_users/${id}`;

  // Lấy dữ liệu user theo ID
  useEffect(() => {
    axios
      .get(nhdApiUrl)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu người dùng!", error);
      });
  }, [id]);

  // Xử lý cập nhật thông tin người dùng
  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi dữ liệu người dùng đã cập nhật đến API
    axios
      .put(nhdApiUrl, user)
      .then(() => {
        // Nếu thành công, điều hướng về danh sách người dùng
        navigate('/list-user');
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật người dùng!", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Chỉnh sửa người dùng</h2>
      {user ? (
        <form onSubmit={handleSubmit} className="p-5 border rounded-3 shadow-lg">
          <div className="mb-3">
            <label htmlFor="nhd_name" className="form-label">Họ và Tên</label>
            <input
              type="text"
              id="nhd_name"
              className="form-control"
              value={user.nhd_name}
              onChange={(e) => setUser({ ...user, nhd_name: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nhd_email" className="form-label">Email</label>
            <input
              type="email"
              id="nhd_email"
              className="form-control"
              value={user.nhd_email}
              onChange={(e) => setUser({ ...user, nhd_email: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nhd_phone" className="form-label">Số điện thoại</label>
            <input
              type="text"
              id="nhd_phone"
              className="form-control"
              value={user.nhd_phone}
              onChange={(e) => setUser({ ...user, nhd_phone: e.target.value })}
              required
            />
          </div>

          {/* Trạng thái hoạt động */}
          <div className="mb-3">
            <label className="form-label">Trạng thái</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="nhd_active"
                id="nhd_active_hd"
                checked={user.nhd_active === true}
                onChange={() => setUser({ ...user, nhd_active: true })}
              />
              <label className="form-check-label" htmlFor="nhd_active_hd">
                Hoạt động
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="nhd_active"
                id="nhd_active_kh"
                checked={user.nhd_active === false}
                onChange={() => setUser({ ...user, nhd_active: false })}
              />
              <label className="form-check-label" htmlFor="nhd_active_kh">
                Khóa
              </label>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg">Lưu thay đổi</button>
          </div>
        </form>
      ) : (
        <p>Đang tải dữ liệu người dùng...</p>
      )}

      <div className="d-flex justify-content-center mt-4">
        <button onClick={() => navigate('/list-user')} className="btn btn-secondary">
          Quay lại danh sách
        </button>
      </div>
    </div>
  );
}
