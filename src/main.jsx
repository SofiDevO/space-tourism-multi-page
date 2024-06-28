import React from 'react';
import "./styles/main.scss";
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
import Crew from './pages/Crew/Crew.jsx';
import Thecnologies from './pages/thecnologies/Thecnologies.jsx';
import Thecnology from './pages/thecnology/Thecnology.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />
  },
  {
    path: "/destination",
    element: <Destination />,
    children: [
      {
        index: true,
        element: <Navigate to="moon" replace />
      },
      {
        path: ":sateliteId",
        element: <Satelites />
      }
    ]
  },
  {
    path: "/technologies",
    element: <Thecnologies/>,
    children: [
      {
        index: true,
        element: <Navigate to="launch-vehicle" replace />
      },
      {
        path: ":technologyId",
        element: <Thecnology />
      }
    ]
  },
  {
    path: "/crew",
    element: <Crew/>
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
