import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const user = useSelector((state) => state.user.data);
  const language = useSelector((state) => state.language.value);

  const Links = [
    {
      name: language === 'English' ? 'Home' : 'หน้าหลัก',
      url: '/##',
    },
    {
      name: 'General Exercise',
      url: '/###',
    },
    {
      name: 'Telemedicine',
      url: '/####',
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

  if (window.location.pathname === '/patient/login') {
    return <Navbar Links={[]} UserLinks={[]} />;
  } else {
    if (user === null) {
      return <Navbar Links={[]} />;
    } else if (user.role === 'patient') {
      return (
        <Navbar
          Links={Links}
          User={user}
          UserLinks={Links}
          SignoutLink={'/patient/login'}
        />
      );
    } else if (user.role === 'physiotherapist') {
      return <Navbar Links={[]} />;
    }
  }
};

export default NavigationBar;
