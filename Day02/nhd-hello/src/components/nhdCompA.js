import React, { Component } from 'react'

export default class nhdCompA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyễn Hữu Duy",
        };
    }

    render() {
        return (
            <div>
                <h2>nhdCompA</h2>
                <p> Họ và Tên: {this.state.name}</p>
                <h3> Hiển thị dữ liệu từ props</h3>
                <p>Họ và Tên: {this.props.nhdName}</p>
                <p>Địa chỉ: {this.props.nhdadd}</p>
                <p>Mã Sinh viên: {this.props.masv}</p>
                <p>Ngày Sinh: {this.props.ngaysinh}</p>
                <p>Điện Thoại: {this.props.dienthoai}</p>
                <p>Tên lớp: {this.props.tenlop}</p>
            </div>
        )
    }
}