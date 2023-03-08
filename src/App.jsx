import React from 'react';
import { render } from 'react-dom';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import NavigationBar from './component/Navbar/NavigationBar';
import GeneralExerciseSet from './page/GeneralExercise/GeneralExerciseSet';
import Home from './page/Home';
import PatientLoginPage from './page/Patient/Auth/PatientLoginPage';
import PatientRegisterPage from './page/Patient/Auth/PatientRegisterPage';
import Patient from './page/Patient/Telemed/Patient';
import Physiotherapist from './page/PT/Physiotherapist';
import TelemedicineFirstPage from './page/Telemedicine/TelemedicineFirstPage';
import VideoChat from './page/VideoChat/VideoChat';
import TelemedicineSecondPage from './page/Telemedicine/TelemedicineSecondPage';
import GeneralExerciseTypePage from './page/GeneralExercise/GeneralExerciseTypePage';
import GeneralExerciseInfo from './page/GeneralExercise/GeneralExerciseInfo';
import PatientProfileInfo from './page/PatientProfile/PatientProfileInfo';
import PatientAppointmentRecord from './page/PatientProfile/PatientAppointmentRecord'
import PatientExerciseRecord from './page/PatientProfile/PatientExerciseRecord'
import PatientAppointmentDetail from './page/PatientProfile/PatientAppointmentDetail'
import PatientVideoRecord from './page/PatientProfile/PatientVideoRecord'
import Homepage from './page/Homepage/Homepage';
import MyExercise from './page/MyExercise/MyExercise';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'homepage',
    element: <Homepage/>,
  },
  {
    path: 'patient/login',
    element: <PatientLoginPage />,
  },
  {
    path: 'patient/register',
    element: <PatientRegisterPage />,
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
  {
    path: 'telemedicine',
    element: <TelemedicineFirstPage />,
  },
  {
    path: 'telemedicine/:id',
    element: <TelemedicineSecondPage />,
  },
  {
    path: 'generalExercise',
    element: <GeneralExerciseTypePage/>,
  },
  {
    path: 'generalExercise/type/:id',
    element: <GeneralExerciseInfo/>,
  },
  {
    path: 'patientProfile',
    element: <PatientProfileInfo/>,
  },
  {
    path: 'patientProfile/appointment',
    element: <PatientAppointmentRecord/>,
  },
  {
    path: 'patientProfile/exercise',
    element: <PatientExerciseRecord/>,
  },
  {
    path: 'patientProfile/appointment/:id',
    element: <PatientAppointmentDetail/>,
  },
  {
    path: 'patientProfile/exercise/:id',
    element: <PatientVideoRecord/>,
  },
  {
    path: 'myExercise',
    element: <MyExercise/>,
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
