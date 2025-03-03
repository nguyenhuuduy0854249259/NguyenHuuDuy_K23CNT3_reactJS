import React, { Component } from 'react';

class NhdEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhdStudentName:'Duy Nguyễn',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (nhdStudentName) thay đổi
    nhdHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nhdStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    nhdHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.nhdStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.nhdHandleSubmit}>
                    <label htmlFor='nhdStudentName'>
                        <input type='text' name='nhdStudentName' id='nhdStudentName' 
                            value={this.state.nhdStudentName}
                            onChange={this.nhdHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default NhdEventForm1;