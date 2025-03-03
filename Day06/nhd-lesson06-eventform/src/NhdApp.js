import React, { Component } from 'react';
import NhdEventForm1 from './components/NhdEventForm1';
import NhdEventForm2 from './components/NhdEventForm2';
import NhdEventForm3 from './components/NhdEventForm3';
import NhdEventForm4 from './components/NhdEventForm4';
import NhdEventForm5 from './components/NhdEventForm5';

class NhdApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  NhdHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <NhdEventForm1 />
          <NhdEventForm2 />
          <NhdEventForm3 />
          <NhdEventForm4 />
          <NhdEventForm5 onNhdHandleSubmit={this.NhdHandleSubmitForm}/>
      </div>
    );
  }
}

export default NhdApp;