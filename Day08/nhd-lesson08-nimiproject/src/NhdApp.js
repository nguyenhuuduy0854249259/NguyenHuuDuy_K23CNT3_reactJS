import React, { Component } from "react";
import NhdControl from "./components/NhdControl";
import NhdStudentList from "./components/NhdStudentList";
import NhdForm from "./components/NhdForm";

class NhdApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nhdStudents:[
        {nhdId:"SV001",nhdStudentName:"Nguyễn Hữu Duy",nhdAge:46,nhdGender:"Nam",nhdBirthday:"25/05/1979",nhdBirthPlace:"HN", nhdAddress:"Tòa VCN, 25 Vũ Ngọc Phan"},
        {nhdId:"SV002",nhdStudentName:"Nam Cung Uyển",nhdAge:188,nhdGender:"Nữ",nhdBirthday:"25/05/1179",nhdBirthPlace:"TQ", nhdAddress:"Yểm Nguyệt Tông"},
        {nhdId:"SV003",nhdStudentName:"Hàn Lập",nhdAge:300,nhdGender:"Nam",nhdBirthday:"25/05/1079",nhdBirthPlace:"TQ", nhdAddress:"Trường Xuân Công"},
        {nhdId:"SV004",nhdStudentName:"Lệ Phi Vũ",nhdAge:654,nhdGender:"Nam",nhdBirthday:"25/05/1079",nhdBirthPlace:"TQ", nhdAddress:"Nội Hải"},
      ],
      nhdStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  nhdHandleView = (nhdStudent)=>{
    this.setState({
      nhdStudent:nhdStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.nhdStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Nguyễn Hữu Duy - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <NhdControl  />
                {/* danh sách sinh vien  */}
                <NhdStudentList  renderNhdStudents={this.state.nhdStudents} onNhdHandleView={this.nhdHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <NhdForm  renderNhdStudent = {this.state.nhdStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NhdApp;