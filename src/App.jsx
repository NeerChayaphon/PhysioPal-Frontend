import React from 'react'
import { render } from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Exercise from './page/Exercise';
import Home from './page/Home';
import Patient from './page/Patient';
import Physiotherapist from './page/Physiotherapist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "exercise",
    element: <Exercise />,
  },
  {
    path: "physiotherapist/:id",
    element: <Physiotherapist />,
  },
  {
    path: "patient",
    element: <Patient/>
  }
]);



const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App