import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Errorpage from './Components/Errorpage/Errorpage';
import Home from './Components/Home/Home';
import ElectronicDetail from './Components/ElectronicDetail/ElectronicDetail';
import DashBoard from './Components/DashBoard/DashBoard';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'electircs/:product_id',
        element:<ElectronicDetail></ElectronicDetail>,
        loader: () =>fetch('/Electronic.json')
      },
      {
        path:'DashBoard',
        element:<DashBoard></DashBoard>,
        loader:() => fetch('/Electronic.json')

      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
