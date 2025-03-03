import React, { Component } from 'react';
import NhdLoginControl from './NhdLoginControl';

class NhdRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
        // Hàm xử lý sự kiện login
        nhdHandleLogin = ()=>{
            this.setState({
                isLoggedIn:true
            })
        }
        // Hàm xử lý sự kiện logout
        nhdHandleLogout=()=>{
            this.setState({
                isLoggedIn:false
            })
        }
    render() {
        let flag = this.state.isLoggedIn;
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr/>
                <NhdLoginControl isLoggedIn={flag} />
                <hr/>
                {
                   flag?<button onClick={this.nhdHandleLogout}>Logout</button>
                        :<button onClick={this.nhdHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NhdRenderCondition;