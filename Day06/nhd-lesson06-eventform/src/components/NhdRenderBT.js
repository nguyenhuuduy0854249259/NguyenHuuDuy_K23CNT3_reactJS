import React from "react";

const initialState = [
  {
    productId: "P001",
    productName: "IPhone 11",
    quantity: 15,
    price: 1000,
  },
  {
    productId: "P002",
    productName: "IPhone 12",
    quantity: 20,
    price: 1250,
  },
  {
    productId: "P003",
    productName: "IPhone 13",
    quantity: 10,
    price: 1500,
  },
  {
    productId: "P004",
    productName: "IPhone 14",
    quantity: 15,
    price: 2000,
  },
];

const ProductTable = () => {
  const transformedData = initialState.map((item) => ({
    prd_id: item.productId,
    prd_name: item.productName,
    prd_quantity: item.quantity,
    prd_price: item.price,
  }));

  return (
    <div className="container">
      <h2 className="title">🔥 Product List 🔥</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {transformedData.map((product) => (
            <tr key={product.prd_id}>
              <td>{product.prd_id}</td>
              <td>{product.prd_name}</td>
              <td>{product.prd_quantity}</td>
              <td>${product.prd_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*   Màu nền tối #1e1e2f giúp bảng trông ngầu hơn.
            Bo góc border-radius: 10px giúp mềm mại hơn.
            Hiệu ứng bóng box-shadow tạo chiều sâu 
            Hiệu ứng bóng box-shadow tạo chiều sâu 
            Ẩn phần tràn nội dung overflow: hidden; đảm bảo bo góc có tác dụng ở mọi kích thước màn hình.
            Hiệu ứng	Công dụng

            Bóng đổ (box-shadow)	Giúp bảng trông có chiều sâu, nổi bật hơn
            Màu nền tối	Làm giao diện trông "ngầu" hơn
            Bo góc (border-radius)	Làm bảng mềm mại, thân thiện hơn
            Hover (tr:hover)	Hiển thị rõ dòng nào đang được chọn
            Hiệu ứng fade-in	Làm bảng xuất hiện mượt mà hơn
            Transition khi hover	Giúp hiệu ứng hover không bị đột ngột*/}
            
      <style jsx>{`
        .container {
          background:rgb(47, 30, 46);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .title {
          color: #ffcc00;
          font-size: 24px;
          margin-bottom: 10px;
        }
        .product-table {
          width: 100%;
          border-collapse: collapse;
          background: #29293d;
          color: white;
          border-radius: 10px;
          overflow: hidden;
        }
        .product-table th, .product-table td {
          padding: 12px;
          border: 1px solid #444;
          text-align: center;
        }
        .product-table th {
          background: #ffcc00;
          color: #1e1e2f;
          font-weight: bold;
        }
        .product-table tr:hover {
          background: #3a3a52;
        }
      `}</style>
    </div>
  );
};

export default ProductTable;
