import React, { useState } from 'react';

export default function NhdProductAdd({ nhdAddNewProduct }) {
  const [nhdProduct, setnhdProduct] = useState({
    nhdpId: '',
    nhdpName: '',
    nhdpQuantity: '',
    nhdpPrice: '',
  });

  const nhdHandleChange = (e) => {
    const { name, value } = e.target;
    setnhdProduct({ ...nhdProduct, [name]: value });
  };

  const nhdHandleSubmit = (e) => {
    e.preventDefault();
    if (nhdProduct.nhdpId && nhdProduct.nhdpName && nhdProduct.nhdpQuantity && nhdProduct.nhdpPrice) {
      nhdAddNewProduct(nhdProduct);
      setnhdProduct({ nhdpId: '', nhdpName: '', nhdpQuantity: '', nhdpPrice: '' });
    } else {
      alert('Vui Lòng Nhập Tất Cả Các Dữ Liệu');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded">
        <h3 className="card-header text-center bg-success text-white">Thêm Sản Phẩm Mới</h3>
        <form onSubmit={nhdHandleSubmit}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="nhdpId" className="form-label">nhdpID</label>
              <input type="text" className="form-control" id="nhdpId" name="nhdpId" value={nhdProduct.nhdpId} onChange={nhdHandleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="nhdpName" className="form-label">nhdpName</label>
              <input type="text" className="form-control" id="nhdpName" name="nhdpName" value={nhdProduct.nhdpName} onChange={nhdHandleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="nhdpQuantity" className="form-label">nhdpQuantity</label>
              <input type="number" className="form-control" id="nhdpQuantity" name="nhdpQuantity" value={nhdProduct.nhdpQuantity} onChange={nhdHandleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="nhdpPrice" className="form-label">nhdpPrice</label>
              <input type="number" className="form-control" id="nhdpPrice" name="nhdpPrice" value={nhdProduct.nhdpPrice} onChange={nhdHandleChange} required />
            </div>
            <button type="submit" className="btn btn-success w-100">Thêm Sản Phẩm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
