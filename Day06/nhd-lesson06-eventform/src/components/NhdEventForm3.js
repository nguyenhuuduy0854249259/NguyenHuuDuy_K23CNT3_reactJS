import React, { Component } from 'react';

class NhdEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhdGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    nhdHandleChange = (event)=>{
        this.setState({
            nhdGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    nhdHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.nhdGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='nhdGioiTinh'  id='nhdNam' className='mx-2'
                            value="Nam" checked={this.state.nhdGioiTinh === 'Nam'} onChange={this.nhdHandleChange}/> 
                            <label htmlFor='nhdNam'>Nam</label>  
                        <input type='radio' name='nhdGioiTinh'  id='nhdNu' className='mx-2'
                            value="Nữ" checked={this.state.nhdGioiTinh === 'Nữ'} onChange={this.nhdHandleChange}/> 
                            <label htmlFor='nhdNu'>Nữ</label>  
                        <input type='radio' name='nhdGioiTinh' id='nhdKhac' className='mx-2'
                            value="Khác" checked={this.state.nhdGioiTinh === 'Khác'} onChange={this.nhdHandleChange}/> 
                            <label htmlFor='nhdKhac'>Khác</label>
                    </div>
                    <button onClick={this.nhdHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NhdEventForm3;