import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextApp from './ContextApp.jsx';
import ProductDetalil from './components/ProductDetail.jsx';
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/product-page/:q",
    element: <ProductDetalil/>
  },
  {
    path: "/login",
    element: <Login/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApp>
      <RouterProvider router={router}/>
    </ContextApp>
  </React.StrictMode>,
)
