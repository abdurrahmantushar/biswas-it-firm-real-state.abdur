import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
    <ToastContainer   
    position="top-center"
    className="top-0"/>
  </StrictMode>,
)
