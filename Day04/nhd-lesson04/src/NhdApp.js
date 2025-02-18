import logo from './logo.svg';
import './App.css';
import NhdFuncComp from './components/NhdFuncComp';
import NhdFuncComp1 from './components/NhdFuncComp1';
import NhdClasscomp from './components/NhdClasscomp';

function NhdApp() {
  // Object
  const users = {
    fullName:'Đặng Văn linh',
    age: 21,
    phone:"098765432"
  }
  const user = {
    fullname:'Hoàng Thùy Linh',
    age: 22,
    phone:"09876543222"
  }
  return (
    <div className="container border mt-3 bg-white">
      <h1>Hello</h1>
      <p>tôi tên là Duy</p>
      <hr/>
      <div className='alert alert-danger'>
    <NhdFuncComp name="Hữu Duy" address="Quang Trung Hà Đông" company = "nhà trọ"/>
    <hr/>
    <NhdFuncComp name="Nguyễn Hoàng Huy" address="Hà Đông" company = "nhà nghỉ"/>
      </div>
      <div className='alert alert-info'>
    <NhdFuncComp1 renderinfo={users} />
    <hr/>
    <NhdFuncComp1 renderinfo={user} />
      </div>
      <NhdClasscomp />
      {/* chuyển dữ liệu từ NhdApp -> xuống NhdClasscomp */}
      <NhdClasscomp renderName="Hoàng" renderUsers={users} />
    </div>
  );
}

export default NhdApp;
