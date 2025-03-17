import React, { useState } from 'react';  // Sửa lại useState

export default function NhdFormUser( ) {
    const [nhdId, setNhdId] = useState('');
    const [nhdFullName, setNhdFullName] = useState('');
    const [nhdUserName, setNhdUserName] = useState('');
    const [nhdPass, setNhdPass] = useState('');

    const nhdHandleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", { nhdId, nhdFullName, nhdUserName, nhdPass });

        onNhdAddNew({nhdId, nhdFullName, nhdUserName, nhdPass})
    };

    return (
        <div>
            <form onSubmit={nhdHandleSubmit}>  {/* Sửa 'from' thành 'form' */}
                <p>Mã Sinh viên:
                    <input type='text' name='nhdId' value={nhdId} onChange={(ev) => setNhdId(ev.target.value)} />
                </p>
                <p>Họ và Tên:
                    <input type='text' name='nhdFullName' value={nhdFullName} onChange={(ev) => setNhdFullName(ev.target.value)} />
                </p>
                <p>Tài khoản:
                    <input type='text' name='nhdUserName' value={nhdUserName} onChange={(ev) => setNhdUserName(ev.target.value)} />
                </p>
                <p>Mật Khẩu:
                    <input type='password' name='nhdPass' value={nhdPass} onChange={(ev) => setNhdPass(ev.target.value)} />
                </p>
                <p>
                    <button type="submit">Save</button>  {/* Đổi onClick thành type="submit" */}
                </p>
            </form>
        </div>
    );
}
