import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Signup from './components/signup';
import Signin from './components/signin';
import './index.css'
import App from './App.jsx'
const router=createBrowserRouter([
  {
    path:'/signup',
    element:<Signup/>
  },{
    path:'/',
    element:<App/>
  },{
    path:'/signin',
    element:<Signin/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>

    <App />
  </StrictMode>,
)
