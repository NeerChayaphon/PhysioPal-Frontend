import React from 'react';
import { useSelector } from 'react-redux';
import NavigationBar from '../component/Navbar/NavigationBar';

const Home = () => {
  const user = useSelector((state) => state.user.data);
  console.log(user);
  return (
    <>
      <div>Home</div>
    </>
  );
};

export default Home;
