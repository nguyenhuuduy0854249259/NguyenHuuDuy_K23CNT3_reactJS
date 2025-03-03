import React, { Component } from 'react';

class NhdRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhdStudents :[
                {nhdId:1,nhdName:"Nguyễn Hữu Duy", nhdAge:21},
                {nhdId:2,nhdName:"Nguyễn Thanh Hùng", nhdAge:20},
                {nhdId:3,nhdName:"Nguyễn Văn Thanh", nhdAge:22},
                {nhdId:4,nhdName:"Trần Công Sơn", nhdAge:21},
            ],
        }
    }

    
    render() {
        // Hiển thị dữ liệu
        let {nhdStudents} = this.state;
        let nhdElement = nhdStudents.map((nhdItem)=>{
            return (
                <li>{nhdItem.nhdId} - {nhdItem.nhdName}</li>
            );
        })

        let nhdRenderElement = nhdStudents.map((nhdItem,index)=>{
            return (
                <tr key={index}>
                    <td>{nhdItem.nhdId}</td>
                    <td>{nhdItem.nhdName}</td>
                    <td>{nhdItem.nhdAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                {nhdElement}
                <hr/>
                <h2> Ở trên xấu quá; -- sử dụng css</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>NhdID</th>
                            <th>NhdName</th>
                            <th>NhdAge</th>
                            <th>NhdAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {nhdRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NhdRenderListObject;