import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NhdCreateUser() {

    // khởi tạo state
    const [nhdFullName,setNhdFullName] = useState('')
    const [nhdAge,setNhdAge] = useState(0)
    const [nhdActive,setNhdActive] = useState(true)

    // api post
    const nhdCreateUserApi = "https://67da815235c87309f52ccf0d.mockapi.io/k23cnt3_nguyenhuuduy/nhd_users";

    // khi submit form
    const nhdHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("nhdActive:",nhdActive);
        let nhdNewUser = {nhdFullName,nhdAge,nhdActive};
        console.log(nhdNewUser);

        // ghi dữ liệu vào api
        axios
            .post(nhdCreateUserApi, nhdNewUser)
            .then((nhd_response)=>{
                
            })
        
    }

  return (
    <div>
        <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="nhdFullName">Full Name</label>
                <input type='text' name='nhdFullName' id="nhdFullName" 
                    value={nhdFullName}
                    onChange={(ev)=>setNhdFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nhdAge">Age</label>
                <input type='number' name='nhdAge' id="nhdAge" 
                    value={nhdAge}
                    onChange={(ev)=>setNhdAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nhdActive">Active</label>
                <input type='radio' name='nhdActive' id="nhdActive_hd" value={'true'} 
                    onChange={(ev)=>setNhdActive(ev.target.value)} />
                    <label for="nhdActive_hd"> Hoạt động</label>
                <input type='radio' name='nhdActive' id="nhdActive_kh" value={'false'} 
                    onChange={(ev)=>setNhdActive(ev.target.value)}/>
                    <label for="nhdActive_kh"> Khóa</label>
            </div>
            <button onClick={nhdHandleSubmit}>Create</button>
        </form>
    </div>
    </div>
  )
}
