import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "bootstrap/dist/css/bootstrap.min.css"; // Thêm Bootstrap
import "./index.css";
import NhdApp from "./NhdApp";
import reportWebVitals from "./reportWebVitals";

const NhdRoot = ReactDOM.createRoot(document.getElementById("NhdRoot"));
NhdRoot.render(
  <React.StrictMode>
    <BrowserRouter> {/* Bọc toàn bộ ứng dụng */}
      <NhdApp />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
