import React from 'react'

export default function NhdFuncEvent1() {

    // Hàm  xử lý sự kiện
    const nhdEventButton1Click = ()=> {
        alert("Button 1 - Clicked");
    };

    const nhdEventButton2Click = ()=> {
        alert("Button 2 - Clicked");
    };
    const nhdEventButton3Click = (name)=> {
        alert("Name:" + name);
    };
  return (
    <div className=''>
        {/* <button className='btn btn-primary' onClick={nhdEventButton1Click()}>
            Button 1
            </button> */}
        <button className='btn btn-success' onClick={nhdEventButton2Click()}>
            Button 2
            </button>
            {/* <button className='btn btn-success' onClick={()=>nhdEventButton3Click("Hữu Duy")}>
            Button 3
            </button> */}
            {/* <button className='btn btn-success' onClick={()=>nhdEventButton3Click("Hữu Duy Nguyễn")}>
            Button 4
            </button> */}
            {/* <button className='btn btn-success' onClick={(param)=>nhdEventButton3Click(param)}>
            Button 5
            </button> */}
    </div>
  );
}
