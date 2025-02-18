import React, { Component } from 'react'

class NhdClasscomp extends Component {
    constructor(props){
        super(props);
        // khởi tạo props
        this.state={
            fullname:"Hữu Đằng",
            age:23,
            phone:"0123456789"
        }
    }
    // hàm sử sử sự kiện
    changeinfo = (ev)=>{
        // cập nhật state
        this.setState({
            fullname:"Đoàn Công Bằng",
            age:25,
            phone:"012987643"
        })
    }
  render() {
    let users = this.props.renderUsers;
    return (
      <div className='alert alert-success'>
        <h2>Trình bày dữ liệu từ state</h2>
        <p>info state (fullname): {this.state.fullname}</p>
        <p>info state (age): {this.state.age}</p>
        <p>info state (phone): {this.state.phone}</p>

        <hr/>
        <button className='btn btn-primary' onClick={this.changeinfo}>Change Info</button> 
        <hr/>

        <h3>lấy dữ liệu từ props</h3>
        <p>Name: {this.props.renderName}</p>

        <p>FullName: {users?users.fullName:''}</p>
        {/* <p>Age: {this.props.renderUsers.age}</p>
        <p>Phone: {this.props.renderUsers.phone}</p> */}
      </div>
    )
  }
}

export default NhdClasscomp;