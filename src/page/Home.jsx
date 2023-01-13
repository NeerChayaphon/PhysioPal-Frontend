import React from 'react';
import { useSelector } from 'react-redux';
import NavigationBar from '../component/Navbar/NavigationBar';
import useCheckUser from '../Hook/useCheckUser';

const Home = () => {
  useCheckUser('patient');
  const user = useSelector((state) => state.user.data);

  return <>{user && <div>{user.role}</div>}</>;
};

export default Home;
