import React from "react";
import  ReactDOM  from 'react-dom/client';
import './index.css';
import App from './views/Home/Home';
import About from './views/About/About'
import Adduser from "./views/Adduser/Adduser";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Edituser from "./views/Edit/Edit";


const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about/:id",
    element: <About />,
  },
  {
path: "/edit/:id",
    element: <Edituser/>
  },
  {
    path:"/adduser",
    element: <Adduser/>
  }
]);

root.render(<RouterProvider router={router} />);
