import React from 'react';
import { render } from 'react-dom';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import NavigationBar from './component/Navbar/NavigationBar';
import GeneralExerciseSet from './page/GeneralExercise/GeneralExerciseSet';
import Home from './page/Home';
import PatientLogin from './page/Patient/Auth/PatientLogin';
import Patient from './page/Patient/Telemed/Patient';
import Physiotherapist from './page/PT/Physiotherapist';
import VideoChat from './page/VideoChat/VideoChat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'patient/login',
    element: <PatientLogin />,
  },
  {
    path: 'physiotherapist/:id',
    element: <Physiotherapist />,
  },
  {
    path: 'patient',
    element: <Patient />,
  },
  {
    path: 'generalExercise/set/:id',
    element: <GeneralExerciseSet />,
  },
  {
    path: 'video-chat',
    element: <VideoChat />,
  },
]);

const App = () => {
  return (
    <>
      <NavigationBar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
