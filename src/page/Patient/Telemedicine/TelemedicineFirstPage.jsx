import React from 'react';
import TelemedicineDoctorCard from '../../../component/telemedicine/TelemedicineDoctorCard';
import TelemedicineHeader from '../../../component/telemedicine/TelemedicineHeader';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import Loading from '../../../component/Loading/Loading';

const TelemedicineFirstPage = () => {
  const [socket, setSocket] = useState(null); // socket
  const [call, setCall] = useState(null);
  const [onlinePhy, setOnlinePhy] = useState([]);
  const token = sessionStorage.getItem('token');
  const [allPhy, setAllPhy] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(allPhy);

  useEffect(() => {
    fetch(
      'https://physiopal-api-deploy-production.up.railway.app/physiotherapists',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllPhy(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const newSocket = io(
      'https://medical-consultation-api-production.up.railway.app'
    ); // socket connect
    setSocket(newSocket);
    getOnline(newSocket, setOnlinePhy);
  }, [setSocket]);

  console.log(onlinePhy);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <TelemedicineHeader />
      <TelemedicineDoctorCard doctorId={onlinePhy} allPhy={allPhy} />
    </div>
  );
};

const getOnline = (socket, setOnlinePhy) => {
  socket.on('connect', () => {
    socket.emit('get-online-physiotherapist', socket.id);
  });
  socket.on('updatePhysiotherapistList', (physiotherapist) => {
    if (Object.keys(physiotherapist).length === 0) {
      setOnlinePhy([]);
    } else {
      setOnlinePhy(Object.keys(physiotherapist));
    }
    // disconnectSocket(socket);
  });
};

const disconnectSocket = (socket) => {
  socket.disconnect();
};

export default TelemedicineFirstPage;
