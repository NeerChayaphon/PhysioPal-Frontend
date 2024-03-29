// Video consultation page
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Peer from 'peerjs';
import io from 'socket.io-client';
// import endCallIcon from '../../img/endcall.png';
// import medicalIcon from '../../img/medical-report-white.png';
// import useTokenCheck from '../../helper/tokenCheck';
import { Link, useParams } from 'react-router-dom';
import { Box, Flex, Button, Image, IconButton } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillTelephoneXFill,
} from 'react-icons/bs';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const VideoChat = () => {
  const { id: userId } = useParams();
  // User auth
  // useTokenCheck(); // ***** Don't forget
  // const location = useLocation();
  // const { type, user } = location.state;

  // eslint-disable-next-line
  const [socket, setSocket] = useState(null); // socket
  const [stream, setStream] = useState(); // video WebRTC
  const [callAccepted, setCallAccepted] = useState(false);
  const userVideo = useRef(); // your video
  const otherVideo = useRef(); // other video
  const navigate = useNavigate();

  // video feature
  const [isMute, setMute] = useState(false);
  const [isVideoOff, setVideoOff] = useState(false);

  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    const newSocket = io(
      'https://medical-consultation-api-production.up.railway.app'
    ); // connect socket
    setSocket(newSocket);

    const myPeer = new Peer(); // create peer
    const peers = {};
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
        // call
        myPeer.on('call', (call) => {
          call.answer(stream);
          setCallAccepted(true);

          // sent user's video to other
          call.on('stream', (userVideoStream) => {
            if (otherVideo.current) {
              otherVideo.current.srcObject = userVideoStream;
            }
          });
        });

        // user connection
        newSocket.on('user-connected', (userId) => {
          connectToNewUser(userId, stream);
        });
      });

    // other user disconnect
    newSocket.on('user-disconnected', (userId) => {
      if (peers[userId]) peers[userId].close();
      setCallAccepted(false);
    });

    // join doctor consultation room
    myPeer.on('open', (id) => {
      newSocket.emit('join-room', userId, id);
    });

    function connectToNewUser(userId, stream) {
      const call = myPeer.call(userId, stream);
      setCallAccepted(true);
      // sent user's video to other
      call.on('stream', (userVideoStream) => {
        if (otherVideo.current) {
          otherVideo.current.srcObject = userVideoStream;
        }
      });
      call.on('close', () => {
        setCallAccepted(false);
      });
      peers[userId] = call;
    }
  }, [userId]);

  let UserVideo;
  if (stream) {
    UserVideo = (
      <video
        className='w-auto rounded-3xl'
        playsInline
        muted
        ref={userVideo}
        autoPlay
      />
    );
  }
  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <video
        className='w-full rounded-3xl'
        playsInline
        ref={otherVideo}
        autoPlay
      />
    );
  }

  const mute = () => {
    const enabled = stream.getAudioTracks()[0].enabled;
    if (enabled) {
      stream.getAudioTracks()[0].enabled = false;
      setMute(true);
    } else {
      stream.getAudioTracks()[0].enabled = true;
      setMute(false);
    }
  };
  const videoControl = () => {
    const enabled = stream.getVideoTracks()[0].enabled;
    if (enabled) {
      stream.getVideoTracks()[0].enabled = false;
      setVideoOff(true);
    } else {
      stream.getVideoTracks()[0].enabled = true;
      setVideoOff(false);
    }
  };

  return (
    <Box>
      <Flex
        h='100vh'
        overflow='auto'
        bg='gray.100'
        p='4'
        alignItems='center'
        mx='6'
        my='2'
      >
        <Box
          w='50%'
          h='lg'
          shadow='lg'
          rounded='lg'
          borderRight={{ base: 'none', lg: '1px solid gray.200' }}
          bg='#B5E3FE'
          p='4'
          overflow={'Hidden'}
        >
          {UserVideo}
        </Box>
        <Box
          w='50%'
          h='lg'
          npm
          shadow='lg'
          rounded='lg'
          borderRight={{ base: 'none', lg: '1px solid gray.200' }}
          bg='#FFCCD0'
          p='4'
          ml='4'
        >
          {PartnerVideo || <Box />}
        </Box>
      </Flex>
      <Flex mx='2' p='4' gap='2' mt='8'>
        <Box w='75%'>
          <Flex justify='start' gap='2'>
            <IconButton
              colorScheme='teal'
              aria-label='Call Segun'
              size='lg'
              icon={isMute ? <FaMicrophoneSlash /> : <FaMicrophone />}
              onClick={mute}
            />
            <IconButton
              colorScheme='teal'
              aria-label='Call Segun'
              size='lg'
              icon={
                isVideoOff ? (
                  <BsFillCameraVideoOffFill />
                ) : (
                  <BsFillCameraVideoFill />
                )
              }
              onClick={videoControl}
            />
            {location.state.type === 'physiotherapist' && (
              <Button
                onClick={() =>
                  window.open(
                    `/physiotherapist/appointment/${location.state.appointment}`,
                    '_blank'
                  )
                }
                rounded='lg'
                py={6}
                bg='purple.500'
                _hover={{ bg: 'purple.700' }}
                color='white'
              >
                Appointment
              </Button>
            )}
            {/* {type === 'doctor' && (
              <Link
                to={{ pathname: `/manageMedicalRecord/${user.id}` }}
                target='_blank'
                rel='noopener noreferrer'
                h='12'
                py='1'
                px='4'
                display='inline-flex'
                rounded='lg'
                bg='indigo.500'
                _hover={{ bg: 'indigo.600' }}
                alignItems='center'
              >
                <Image src={medicalIcon} alt='' w='8' mr='-3' py='1' />
                <Box ml='5' py='2' fontSize='base' color='white'>
                  Medical Record
                </Box>
              </Link>
            )} */}
          </Flex>
        </Box>
        <Box w='25%'>
          <Flex justify='end' gap='2'>
            <a
              href={
                location.state.type === 'physiotherapist'
                  ? '/physiotherapist/dashboard'
                  : '/patient/profile/appointment'
              }
            >
              <IconButton
                colorScheme='red'
                aria-label='Call Segun'
                size='lg'
                icon={<BsFillTelephoneXFill />}
              />
            </a>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default VideoChat;
