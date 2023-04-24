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
import TelemedicineFirstPage from './page/Patient/Telemedicine/TelemedicineFirstPage';
import VideoChat from './page/Patient/VideoChat/VideoChat';
import TelemedicineSecondPage from './page/Patient/Telemedicine/TelemedicineSecondPage';
import GeneralExerciseTypePage from './page/GeneralExercise/GeneralExerciseTypePage';
import GeneralExerciseInfo from './page/GeneralExercise/GeneralExerciseInfo';
import PatientProfileInfo from './page/Patient/PatientProfile/PatientProfileInfo';
import PatientAppointmentRecord from './page/Patient/PatientProfile/PatientAppointmentRecord';
import PatientExerciseRecord from './page/Patient/PatientProfile/PatientExerciseRecord';
import PatientAppointmentDetail from './page/Patient/PatientProfile/PatientAppointmentDetail';
import PatientVideoRecord from './page/Patient/PatientProfile/PatientVideoRecord';
import Homepage from './page/Patient/Homepage/Homepage';
import MyExercise from './page/Patient/MyExercise/MyExercise';

import PTProfile from './page/PT/PTProfile/PTProfile';
import PTLogIn from './page/PT/PTLogIn/PTLogIn';
import PTDashboard from './page/PT/PTDashboard/PTDashboard';
import PTViewPatientProfile from './page/PT/PTViewPatientProfile/PTViewPatientProfile';
import PTPatientAppointment from './page/PT/PTViewPatientProfile/PTPatientAppointment';
import PTPatientAppointmentDetail from './page/PT/PTViewPatientProfile/PTPatientAppointmentDetail';
import PTPatientExerciseRecord from './page/PT/PTViewPatientProfile/PTPatientExerciseRecord';
import PTPatientVideoRecord from './page/PT/PTViewPatientProfile/PTPatientVideoRecord';
import PTAppointmentDetail from './page/PT/PTDashboard/PTAppointmentDetail';
import PTTherapeuticalExercise from './page/PT/PTDashboard/PTTherapeuticalExercise';
import PTTherapeuticalExerciseShopping from './page/PT/PTDashboard/PTTherapeuticalExerciseShopping';
import PTNote from './page/PT/PTNote/PTNote';
import GeneralExerciseMain from './page/GeneralExercise/GeneralExerciseMain';
import GeneralExerciseSetMain from './page/GeneralExercise/GeneralExerciseSetMain';
import TherapeuticExerciseInfo from './page/GeneralExercise copy/TherapeuticExerciseInfo';
import TherapeuticExerciseMain from './page/GeneralExercise copy/TherapeuticExerciseMain';
import TherapeuticExerciseSetMain from './page/GeneralExercise copy/TherapeuticExerciseSetMain';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  // {
  //   path: 'homepage',
  //   element: <Homepage />,
  // },
  {
    path: 'patient/login',
    element: <PatientLoginPage />,
  },
  {
    path: 'patient/register',
    element: <PatientRegisterPage />,
  },
  {
    path: 'physiotherapist/watting-room/:id',
    element: <Physiotherapist />,
  },
  {
    path: 'testtelemedicine',
    element: <Patient />,
  },
  {
    path: 'patient/generalExercise/set/:id',
    element: <GeneralExerciseMain />,
  },
  {
    path: 'patient/generalExercise/session',
    element: <GeneralExerciseSetMain />,
  },
  {
    path: 'call/:id',
    element: <VideoChat />,
  },
  {
    path: 'patient/telemedicine',
    element: <TelemedicineFirstPage />,
  },
  {
    path: 'patient/telemedicine/:id',
    element: <TelemedicineSecondPage />,
  },
  {
    path: 'patient/generalExercise',
    element: <GeneralExerciseTypePage />,
  },
  {
    path: 'patient/generalExercise/type/:id',
    element: <GeneralExerciseInfo />,
  },
  {
    path: 'patient/profile',
    element: <PatientProfileInfo />,
  },
  {
    path: 'patient/profile/appointment',
    element: <PatientAppointmentRecord />,
  },
  {
    path: 'patient/profile/exercise',
    element: <PatientExerciseRecord />,
  },
  {
    path: 'patient/profile/appointment/:id',
    element: <PatientAppointmentDetail />,
  },
  {
    path: 'patient/profile/exercise/:id',
    element: <PatientVideoRecord />,
  },
  {
    path: 'patient/myExercise',
    element: <MyExercise />,
  },
  {
    path: 'patient/therapeuticExercise/info/:id',
    element: <TherapeuticExerciseInfo />,
  },
  {
    path: 'patient/therapeuticExercise/set/:id',
    element: <TherapeuticExerciseMain />,
  },
  {
    path: 'patient/therapeuticExercise/session',
    element: <TherapeuticExerciseSetMain />,
  },
  // End for Patient

  //Start for Doctor
  {
    path: 'physiotherapist/profile',
    element: <PTProfile />,
  },
  {
    path: 'physiotherapist/login',
    element: <PTLogIn />,
  },
  {
    path: 'physiotherapist/dashboard',
    element: <PTDashboard />,
  },
  {
    path: 'physiotherapist/patientprofile/:id',
    element: <PTViewPatientProfile />,
  },
  {
    path: 'physiotherapist/patientappointment/:id',
    element: <PTPatientAppointment />,
  },
  {
    path: 'physiotherapist/patientappointment/details/:id',
    element: <PTPatientAppointmentDetail />,
  },
  {
    path: 'physiotherapist/patientexercise/:id',
    element: <PTPatientExerciseRecord />,
  },
  {
    path: 'physiotherapist/patientexercise/details/:id',
    element: <PTPatientVideoRecord />,
  },
  {
    path: 'physiotherapist/appointment/:id',
    element: <PTAppointmentDetail />,
  },
  {
    path: 'physiotherapist/appointment/therapeutical/:id',
    element: <PTTherapeuticalExercise />,
  },
  {
    path: 'physiotherapist/dashboard/:id/therapeutical/shopping',
    element: <PTTherapeuticalExerciseShopping />,
  },
  {
    path: 'physiotherapist/note',
    element: <PTNote />,
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
