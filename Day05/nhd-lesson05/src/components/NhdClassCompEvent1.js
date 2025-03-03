import React, { Component } from 'react'

class NhdClassCompEvent1 extends Component {
    // hàm sử lý sự kiện
    nhdEventHandleClick = ()=>{
        alert("Button 1 clicked");
    }
  render() {
    return (
      <div>
        <button className='btn btn-primary mx-1'>button1</button>
        <button className='btn btn-success mx-1'>button2</button>
      </div>
    )
  }
}

export default NhdClassCompEvent1;