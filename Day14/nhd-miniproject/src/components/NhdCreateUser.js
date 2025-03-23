import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function NhdCreateUser() {
    // Khởi tạo state
    const [nhd_name, setNhd_name] = useState('');
    const [nhd_email, setNhd_email] = useState('');
    const [nhd_phone, setNhd_phone] = useState('');
    const [nhd_active, setNhd_active] = useState(true);

    const navigate = useNavigate();
    
    // API post
    const nhdCreateUserApi = "https://67da815235c87309f52ccf0d.mockapi.io/k23cnt3_nguyenhuuduy/nhd_users";

    // Khi submit form
    const nhdHandleSubmit = (event) => {
        event.preventDefault();
        
        let nhdNewUser = { nhd_name, nhd_email, nhd_phone, nhd_active };

        axios.post(nhdCreateUserApi, nhdNewUser)
            .then((response) => {
                console.log(response.data);
                navigate("/list-user"); // Điều hướng sau khi tạo user thành công
            })
            .catch((error) => {
                console.log("Lỗi", error);
            });
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl rounded-lg">
            <form onSubmit={nhdHandleSubmit}>
                <h2 className="text-3xl font-bold mb-6 text-center">Thêm Mới User</h2>

                <div className="mb-4">
                    <label htmlFor="nhd_name" className="block font-medium">Name</label>
                    <input
                        type="text"
                        id="nhd_name"
                        placeholder="Nhập tên của bạn"
                        className="w-full p-3 border border-gray-300 rounded text-black"
                        onChange={(ev) => setNhd_name(ev.target.value)}
                        value={nhd_name}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="nhd_email" className="block font-medium">Email</label>
                    <input
                        type="email"
                        id="nhd_email"
                        placeholder="Nhập email của bạn"
                        className="w-full p-3 border border-gray-300 rounded text-black"
                        onChange={(ev) => setNhd_email(ev.target.value)}
                        value={nhd_email}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="nhd_phone" className="block font-medium">Phone</label>
                    <input
                        type="text"
                        id="nhd_phone"
                        placeholder="Nhập số điện thoại"
                        className="w-full p-3 border border-gray-300 rounded text-black"
                        onChange={(ev) => setNhd_phone(ev.target.value)}
                        value={nhd_phone}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-medium">Trạng thái</label>
                    <div className="flex gap-4 mt-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="nhd_active"
                                value="true"
                                checked={nhd_active === true}
                                onChange={() => setNhd_active(true)}
                                className="mr-2"
                            /> Hoạt Động
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="nhd_active"
                                value="false"
                                checked={nhd_active === false}
                                onChange={() => setNhd_active(false)}
                                className="mr-2"
                            /> Khóa
                        </label>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button type="submit" className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition">Create</button>
                    <Link to={'/list-user'} className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition">Back</Link>
                </div>
            </form>
        </div>
    );
}
