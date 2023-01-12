import React from 'react';
import Navbar from './Navbar';

const PatientNavbar = () => {
  const Links = [
    {
      name: 'Home',
      url: '/#',
    },
    {
      name: 'General Exercise',
      url: '/#',
    },
    {
      name: 'Telemedicine',
      url: '/#',
    },
    {
      name: 'My Exercise',
      url: '/#',
    },
    {
      name: 'About us',
      url: '/#',
    },
  ];
  return <Navbar Links={Links} />;
};

export default PatientNavbar;
