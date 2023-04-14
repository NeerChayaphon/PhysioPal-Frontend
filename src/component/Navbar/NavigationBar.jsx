import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const user = useSelector((state) => state.user.data);
  const language = useSelector((state) => state.language.value);

  const [userData, setUserData] = React.useState(null);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const Links = [
    {
      name: language === 'English' ? 'Home' : 'หน้าหลัก',
      url: '/',
    },
    {
      name: 'General Exercise',
      url: '/patient/generalExercise',
    },
    {
      name: 'Telemedicine',
      url: '/patient/telemedicine',
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

  // if (window.location.pathname === '/patient/login') {
  //   return <Navbar Links={[]} UserLinks={[]} />;
  // } else {
  //   if (userData === null) {
  //     return null;
  //   } else if (userData.role === 'patient') {
  //     return (
  //       <Navbar
  //         Links={Links}
  //         User={userData}
  //         UserLinks={Links}
  //         SignoutLink={'/patient/login'}
  //       />
  //     );
  //   } else if (userData.role === 'physiotherapist') {
  //     return <Navbar Links={[]} />;
  //   }
  // }
  if (user != null) {
    if (user.role === 'patient') {
      return (
        <Navbar
          Links={Links}
          User={user}
          UserLinks={Links}
          SignoutLink={'/patient/login'}
        />
      );
    } else if (user.role === 'physiotherapist') {
      return (
        <Navbar
          Links={Links}
          User={user}
          UserLinks={Links}
          SignoutLink={'/patient/login'}
        />
      );
    }
  } else {
    return <Navbar Links={[]} />;
  }
};

export default NavigationBar;
