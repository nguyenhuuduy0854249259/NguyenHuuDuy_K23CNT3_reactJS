import React, { Component } from 'react';

class NhdEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhdName:'Duy',
            nhdAge:21,
            nhdGender:'Male',
            nhdCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nhdHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    nhdHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.nhdName + "\n" + this.state.nhdAge);

        // Chuyển dữ liệu trên form lên App component (nhdApp);
        this.props.onnhdHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='nhdName'>Student Name:</label>
                        <input type='text' name='nhdName' id='nhdName' 
                            value={this.state.nhdName}
                            onChange={this.nhdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nhdAge'>Student Age:</label>
                        <input type='text' name='nhdAge' id='nhdAge' 
                            value={this.state.nhdAge}
                            onChange={this.nhdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nhdGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nhdGender' id='nhdMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nhdGender === 'Male'}
                                onChange={this.nhdHandleChange} />
                            <label htmlFor='nhdMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nhdGender' id='nhdFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nhdGender === 'Female'}
                                onChange={this.nhdHandleChange} />
                            <label htmlFor='nhdFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nhdGender' id='nhdNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nhdGender === 'None'}
                                onChange={this.nhdHandleChange} />
                            <label htmlFor='nhdNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nhdCourse'>
                            <select name='nhdCourse' id='nhdCourse' 
                                    value={this.state.nhdCourse}
                                    onChange={this.nhdHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.nhdHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NhdEventForm5;