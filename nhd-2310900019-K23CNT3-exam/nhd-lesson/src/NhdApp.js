import React, { useState } from "react";
import NhdProductList from "./components/NhdProductList";
import NhdProductAdd from "./components/NhdProductAdd";

const NhdApp = () => {
  // Khởi tạo danh sách thành viên/sản phẩm
  const [members, setMembers] = useState([
    { nhdpid: "SV001", nhdpName: "Nguyễn Văn A", nhdpQuantity: 1, nhdpPrice: 0 },
    { nhdpid: "SV002", nhdpName: "Nguyễn Thị B", nhdpQuantity: 2, nhdpPrice: 0 },
    { nhdpid: "A001", nhdpName: "Cây", nhdpQuantity: 5, nhdpPrice: 1500 },
    { nhdpid: "A002", nhdpName: "Cỏ", nhdpQuantity: 10, nhdpPrice: 800 },
  ]);

  // Gán danh sách sản phẩm ban đầu từ members
  const [nhdProductList, setnhdProductList] = useState(members);

  // Hàm thêm sản phẩm mới
  const nhdAddNewProduct = (nhdNewProduct) => {
    setnhdProductList((nhdPrevProducts) => [...nhdPrevProducts, nhdNewProduct]);
  };

  return (
    <div className="container-fluid">
      <NhdProductAdd nhdAddNewProduct={nhdAddNewProduct} />
      <NhdProductList nhdProductList={nhdProductList} />
    </div>
  );
};

export default NhdApp;
