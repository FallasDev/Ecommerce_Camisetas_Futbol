import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextApp from './ContextApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/product-page/:q",
    element: <h1>Your Product</h1>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApp>
      <RouterProvider router={router}/>
    </ContextApp>
  </React.StrictMode>,
)
