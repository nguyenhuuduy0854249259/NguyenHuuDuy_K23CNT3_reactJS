import React, { Component } from "react";
import NhdStudent from "./NhdStudent";

class NhdStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    nhdHandleView = (nhdStudent)=>{
        // Chuyển dữ liệu lên NhdApp
        this.props.onNhdHandleView(nhdStudent);
    }


  render() {
    // lấy dữ liệu trong props từ NhdApp chuyển xuống
    let {renderNhdStudents} = this.props;
    console.log("List:",renderNhdStudents);
    
    // chuyển dữ liệu vào NhdStudent để hiển thị
    let nhdElementStudent = renderNhdStudents.map((nhdItem,index)=>{
        return <NhdStudent key={index} renderNhdStudent={nhdItem} onNhdHandleView={this.nhdHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {nhdElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NhdStudentList;