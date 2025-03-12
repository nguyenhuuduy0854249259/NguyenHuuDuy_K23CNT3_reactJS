import React from 'react';

export default function nhdProductList({ nhdProductList }) {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded">
        <h3 className="card-header text-center bg-primary text-white">Danh Sách Sản Phẩm</h3>
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>nhdpID</th>
              <th>nhdpName</th>
              <th>nhdpQuantity</th>
              <th>nhdpPrice</th>
            </tr>
          </thead>
          <tbody>
            {nhdProductList.map((nhdItem) => (
              <tr key={nhdItem.nhdpId}>
                <td>{nhdItem.nhdpId}</td>
                <td>{nhdItem.nhdpName}</td>
                <td>{nhdItem.nhdpQuantity}</td>
                <td>{nhdItem.nhdpPrice.toLocaleString()}</td> {/* Added number formatting */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}