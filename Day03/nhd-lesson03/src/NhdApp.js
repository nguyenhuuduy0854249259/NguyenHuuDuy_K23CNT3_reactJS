import logo from './logo.svg';
import './App.css';
import NhdJsxExpression from './components/NhdJsxExpression';
import NhdFuncComp from './components/NhdFuncComp';
import NhdclassComp from './components/NhdclassComp';

function nhdApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1> React JS lesson03 - Nguyễn Hữu Duy</h1>

      <NhdJsxExpression />

      <hr/>
      {/* Sử dụng function Components */}
      <NhdFuncComp/>
      
      {/* Sử dụng function Components */}
      <NhdclassComp></NhdclassComp>
      
    </div>
  );
}

export default nhdApp;
