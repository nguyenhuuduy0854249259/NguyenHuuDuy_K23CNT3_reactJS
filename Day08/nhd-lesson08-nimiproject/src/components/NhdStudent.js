import React, { Component } from "react";

class NhdStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    nhdHandleView = (nhdStudent)=>{
        // Chuyển lên NhdStudentList
        this.props.onNhdHandleView(nhdStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ nhdStudentList
    let {renderNhdStudent, key} = this.props;
    console.log("Student:",renderNhdStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderNhdStudent.nhdId}</td>
          <td>{renderNhdStudent.nhdStudentName}</td>
          <td>{renderNhdStudent.nhdAge}</td>
          <td>{renderNhdStudent.nhdGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.nhdHandleView(renderNhdStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default NhdStudent;