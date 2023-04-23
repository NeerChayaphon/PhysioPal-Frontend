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
      name:
        language === 'English' ? 'General Exercise' : 'การออกกำลังกายทั่วไป',
      url: '/patient/generalExercise',
    },
    {
      name: language === 'English' ? 'Telemedicine' : 'การแพทย์ทางไกล',
      url: '/patient/telemedicine',
    },
    {
      name: language === 'English' ? 'My Exercise' : 'การออกกำลังกายของฉัน',
      url: '/patient/profile/exercise',
    },
  ];

  const PTLinks = [
    {
      name: language === 'English' ? 'Home' : 'หน้าหลัก',
      url: '/physiotherapist/dashboard',
    },
    {
      name: language === 'English' ? 'Telemedicine' : 'การแพทย์ทางไกล',
      url:
        userData !== null
          ? `/physiotherapist/watting-room/${userData.data._id}`
          : '',
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
      return <Navbar Links={Links} User={user} Language={language} />;
    } else if (user.role === 'physiotherapist') {
      return (
        <Navbar
          Links={PTLinks}
          User={user}
          Language={language}
          HomePageLink='/physiotherapist/dashboard'
        />
      );
    }
  } else {
    return <Navbar Links={[]} />;
  }
};

export default NavigationBar;
