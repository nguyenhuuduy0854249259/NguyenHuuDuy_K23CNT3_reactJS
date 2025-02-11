import logo from './logo.svg';
import './App.css';
import NhdCompA from './components/nhdCompA'; // Đảm bảo component này được export đúng

function App() {
  return (
    <div className="App">
      <NhdCompA />
      <NhdCompA nhdname="Nguyễn Hữu Duy" nhdadd="Khu biệt thự số 25 Thiên Định" masv="2310900019" ngaysinh="10/05/2003" dienthoai="0854249259" tenlop="K23CNT3" />
    </div>
  );
}

export default App;
