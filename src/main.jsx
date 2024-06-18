import React from 'react'
import "./styles/main.scss"
import '@fontsource/bellefair';
import '@fontsource/barlow-condensed';
import { Navigate } from 'react-router-dom';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hero from './pages/hero/Hero.jsx';
import Destination from './pages/destination/Destination.jsx';
import Satelites from './pages/satelites/Satelites.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Hero/>
  },
  {
    path: "/destination",
    element:  <Destination/>,
  },
  {
    path:"/destination/moon",
    element:<Satelites/>
  },
  {
    path:"/destination/:sateliteid",
    element:<Satelites/>
  },
  {
    path: "*",
    element: <Navigate to="/"/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
