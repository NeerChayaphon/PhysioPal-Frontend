import React from 'react';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Center, Spinner, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ringtone from '../../utils/music/ringtone.mp3';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useCookie } from 'react-use';

const Physiotherapist = () => {
  const { id } = useParams();
  const [socket, setSocket] = useState(null); // socket
  const [call, setCall] = useState(null);
  const [token, updateToken, deleteToken] = useCookie('token');

  const navigate = useNavigate();

  useEffect(() => {
    const newSocket = io(
      'https://medical-consultation-api-production.up.railway.app'
    );
    setSocket(newSocket); // set doctor socket
    connectUser(newSocket, id);
  }, [setSocket]);
  // retrieve call from patient
  if (socket) {
    socket.on('retrieve', (message) => {
      setCall(message);
      console.log(message);
    });
  }

  const callAudio = new Audio(ringtone);

  useEffect(() => {
    if (call != null) {
      callAudio.play();
    }
  }, [call]);

  // answer call
  const answerCall = () => {
    callAudio.pause();
    var delayInMilliseconds = 3000; //2 second
    socket.emit('answerCall', call.from, true);
    addTelemedicineHistory(token, id, call.patient._id, id);

    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/appointment`,
      {
        method: 'POST',
        body: JSON.stringify({
          patient: call.patient._id,
          physiotherapist: id,
          date: new Date(),
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        navigate(`/call/${id}`, {
          state: {
            type: 'physiotherapist',
            user: call.patient._id,
            appointment: data.data.InsertedID,
          },
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // setTimeout(function () {
    //   // history.push({
    //   //   pathname: `/call/${call.url}`,
    //   //   state: {type: 'doctor', user: call.patient},
    //   // });
    // navigate(`/call/${id}`, {
    //   state: {
    //     type: 'physiotherapist',
    //     user: call.patient._id,
    //     appointment: appointment,
    //   },
    // });
    //   console.log('answer call');
    // }, delayInMilliseconds);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={call}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Incoming call</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody>
            Patient
          </ModalBody> */}

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={answerCall}>
              Answer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Center h='100vh' bg='gray.100'>
        <Spinner size='xl' color='blue.500' thickness='4px' speed='1.0s' />
        <Text ml='4' fontSize='2xl' fontWeight='bold'>
          Waiting in-comming call...
        </Text>
      </Center>
    </>
  );
};

const connectUser = (socket, userid) => {
  socket.on('connect', () => {
    socket.emit('online-user', socket.id, userid);
  });
};

export default Physiotherapist;

const addTelemedicineHistory = (token, roomID, patient, physiotherapist) => {
  fetch(`https://physiopal-api-deploy-production.up.railway.app/telemedicine`, {
    method: 'POST',
    body: JSON.stringify({
      roomID,
      patient,
      physiotherapist,
      date: new Date(),
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  }).catch((error) => {
    console.error('Error fetching data:', error);
  });
};

const addAppointment = (token, patient, physiotherapist) => {
  fetch(`https://physiopal-api-deploy-production.up.railway.app/appointment`, {
    method: 'POST',
    body: JSON.stringify({
      patient,
      physiotherapist,
      date: new Date(),
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return null;
    });
};
