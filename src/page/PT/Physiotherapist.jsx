import React from 'react';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
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
import IncommingCall from '../../component/telemedicine/IncommingCall';

const Physiotherapist = () => {
  const { id } = useParams();
  const [socket, setSocket] = useState(null); // socket
  const [call, setCall] = useState(null);

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

  useEffect(() => {
    if (call != null) {
      new Audio(`https://d13nrtvuooncbe.cloudfront.net/round1-th.mp3`).play();
    }
  }, [call]);

  // answer call
  const answerCall = () => {
    var delayInMilliseconds = 1000; //2 second
    socket.emit('answerCall', call.from, true);
    setTimeout(function () {
      // history.push({
      //   pathname: `/call/${call.url}`,
      //   state: {type: 'doctor', user: call.patient},
      // });
      navigate(`/call/${id}`, {
        state: { type: 'physiotherapist', user: call.patient._id },
      });
      console.log('answer call');
    }, delayInMilliseconds);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={call}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nulla
            nemo. Vero quisquam incidunt molestiae illo, sequi magni inventore
            nam accusamus illum porro, alias sit ad dignissimos quis, voluptates
            consequatur.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={answerCall}>
              Answer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div>Physiotherapist {id}</div>
    </>
  );
};

const connectUser = (socket, userid) => {
  socket.on('connect', () => {
    socket.emit('online-user', socket.id, userid);
  });
};

export default Physiotherapist;
