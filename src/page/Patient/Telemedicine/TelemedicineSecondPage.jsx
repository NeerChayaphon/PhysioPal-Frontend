import React, { useEffect, useState } from 'react';
import TelemedicineCardInfo from '../../../component/telemedicine/TelemedicineCardInfo';
import TelemedicineHeader from '../../../component/telemedicine/TelemedicineHeader';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../../../component/Loading/Loading';
import io from 'socket.io-client';
import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useCookie } from 'react-use';

const TelemedicineSecondPage = () => {
  const { id } = useParams();
  const [token, updateToken, deleteToken] = useCookie('token');
  const [loading, setLoading] = useState(true);
  const [onlinePhy, setOnlinePhy] = useState(null);

  const [socket, setSocket] = useState(null); // socket.io
  const [onlineDoc, setOnlineDoc] = useState(null); // physiotherapist information
  const [fetchFail, setFetchFail] = useState(false); // condition of fectching physiotherapist data

  const user = useSelector((state) => state.user.data);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/physiotherapist/${id}`,
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
        // setAllPhy(data.data);
        setLoading(false);
        setOnlinePhy(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const newSocket = io(
      'https://medical-consultation-api-production.up.railway.app'
    ); // connect socket
    setSocket(newSocket);
    getOnlineDoc(newSocket, setOnlineDoc, setFetchFail); // get list of avaliable physiotherapist
    newSocket.on('availableCall', (status) => {
      // listen for physiotherapist to answer call
      if (status) {
        newSocket.disconnect();
        console.log('physiotherapist has answer call');
        // history.push({
        //   pathname: `/call/${match.params.id}`,
        //   state: {type: 'patient', user: 'Not a physiotherapist'},
        // });
        navigate(`/call/${id}`, {
          state: { type: 'patient', user: 'Not a physiotherapist' },
        });
      } else {
        setFetchFail(true);
      }
    });
  }, [setSocket]);

  console.log(onlinePhy);

  // call physiotherapist
  const callPhysiotherapist = () => {
    if (!fetchFail) {
      console.log(onlineDoc);
      let socketList = onlineDoc[id];
      console.log(socketList);
      socketList.forEach((socketId) => {
        socket.emit('call', socketId, {
          from: socket.id,
          url: id,
          patient: user.data,
        });
      });
    }
  };

  // get the physiotherapist information
  const getOnlineDoc = (socket, setOnlineDoc, setFetchFail) => {
    socket.on('connect', () => {
      socket.emit('get-online-physiotherapist', socket.id);
    });
    socket.on('updatePhysiotherapistList', (physiotherapist) => {
      if (Object.keys(physiotherapist).length === 0) {
        setOnlineDoc(null);
      } else {
        setOnlineDoc(physiotherapist);
      }
      console.log(physiotherapist);
      if (Object.keys(physiotherapist).length === 0) {
        setFetchFail(true);
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  // physiotherapist is not avaliable
  if (fetchFail) {
    return (
      <>
        <div className='flex justify-center items-center mt-52'>
          <h1 className='font-fontPro text-4xl text-gray-700'>
            This physiotherapist is offline or in another call
          </h1>
        </div>
      </>
    );
  }

  if (onlinePhy != null) {
    return (
      <div>
        {/* <Button onClick={callPhysiotherapist}> Call</Button> */}
        <TelemedicineHeader />
        <TelemedicineCardInfo PT={onlinePhy} videoCall={callPhysiotherapist} />
      </div>
    );
  }
};

export default TelemedicineSecondPage;
