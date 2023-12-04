import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Tabela from './routes/Tabela.tsx';

const router = createBrowserRouter([
  {
  path: "/", 
  element: <App/>,
  children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "tabela",
      element: <Tabela/>
    }
  ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
