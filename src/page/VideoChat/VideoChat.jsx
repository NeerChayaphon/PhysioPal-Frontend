import {useRef, useState} from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';

import {ReactComponent as HangupIcon} from '../../icons/hangup.svg';
import {ReactComponent as MoreIcon} from '../../icons/more-vertical.svg';
import {ReactComponent as CopyIcon} from '../../icons/copy.svg';

import '../../App.css';
import {
  Button,
  Flex,
  VStack,
  HStack,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Container,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Navbar from '../../component/navbar';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCz5Ogt06un7xuw6x37Hqh30lW5tMEDKVQ',
  authDomain: 'seniorproject-29016.firebaseapp.com',
  projectId: 'seniorproject-29016',
  storageBucket: 'seniorproject-29016.appspot.com',
  messagingSenderId: '852375355889',
  appId: '1:852375355889:web:43ce018d8217c616950450',
  measurementId: 'G-P4JCWP3LRW',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

// Initialize WebRTC
const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

const pc = new RTCPeerConnection(servers);

function VideoChat() {
  const [currentPage, setCurrentPage] = useState('home');
  const [joinCode, setJoinCode] = useState('');

  return (
    <>
      <Navbar />
      <Flex alignItems='flex-start' flexDir='column' m={8}>
        <Text textColor='black' fontWeight='bold' fontSize='xl' mb={4}>
          Telemedicine
        </Text>

        {/* <HStack w='full' alignItems='flex-start' bg='blue.50'>
  
        </HStack> */}
        {currentPage === 'home' ? (
          <Menu
            joinCode={joinCode}
            setJoinCode={setJoinCode}
            setPage={setCurrentPage}
          />
        ) : (
          <Videos
            mode={currentPage}
            callId={joinCode}
            setPage={setCurrentPage}
          />
        )}
      </Flex>
    </>
  );
}

function Menu({joinCode, setJoinCode, setPage}) {
  return (
    <Grid w='100%' templateColumns='6fr 6fr' h='xl'>
      <GridItem
        w='100%'
        bgColor='gray.100'
        justifyContent='center'
        display='flex'
        alignItems='center'
      >
        <VStack>
          <Button bgColor="teal.400" color="white" onClick={() => setPage('create')}>Create Call</Button>
        </VStack>
      </GridItem>
      <GridItem
        w='100%'
        bgColor='gray.200'
        justifyContent='center'
        display='flex'
        flexDir='column'
        alignItems='center'
      >
        <VStack>
          <Input
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            placeholder='Join with code'
            bgColor="white"
          ></Input>
          <Button  bgColor="teal.400" color="white" onClick={() => setPage('join')}>Answer</Button>
        </VStack>
      </GridItem>
    </Grid>
  );
}

function Videos({mode, callId, setPage}) {
  const [webcamActive, setWebcamActive] = useState(false);
  const [roomId, setRoomId] = useState(callId);

  const localRef = useRef();
  const remoteRef = useRef();

  const setupSources = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    const remoteStream = new MediaStream();

    localStream.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });

    pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    localRef.current.srcObject = localStream;
    remoteRef.current.srcObject = remoteStream;

    setWebcamActive(true);

    if (mode === 'create') {
      const callDoc = firestore.collection('calls').doc();
      const offerCandidates = callDoc.collection('offerCandidates');
      const answerCandidates = callDoc.collection('answerCandidates');

      setRoomId(callDoc.id);

      pc.onicecandidate = (event) => {
        event.candidate && offerCandidates.add(event.candidate.toJSON());
      };

      const offerDescription = await pc.createOffer();
      await pc.setLocalDescription(offerDescription);

      const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
      };

      await callDoc.set({offer});

      callDoc.onSnapshot((snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
          const answerDescription = new RTCSessionDescription(data.answer);
          pc.setRemoteDescription(answerDescription);
        }
      });

      answerCandidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const candidate = new RTCIceCandidate(change.doc.data());
            pc.addIceCandidate(candidate);
          }
        });
      });
    } else if (mode === 'join') {
      const callDoc = firestore.collection('calls').doc(callId);
      const answerCandidates = callDoc.collection('answerCandidates');
      const offerCandidates = callDoc.collection('offerCandidates');

      pc.onicecandidate = (event) => {
        event.candidate && answerCandidates.add(event.candidate.toJSON());
      };

      const callData = (await callDoc.get()).data();

      const offerDescription = callData.offer;
      await pc.setRemoteDescription(
        new RTCSessionDescription(offerDescription)
      );

      const answerDescription = await pc.createAnswer();
      await pc.setLocalDescription(answerDescription);

      const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp,
      };

      await callDoc.update({answer});

      offerCandidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let data = change.doc.data();
            pc.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      });
    }

    pc.onconnectionstatechange = (event) => {
      if (pc.connectionState === 'disconnected') {
        hangUp();
      }
    };
  };

  const hangUp = async () => {
    pc.close();

    if (roomId) {
      let roomRef = firestore.collection('calls').doc(roomId);
      await roomRef
        .collection('answerCandidates')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });
      await roomRef
        .collection('offerCandidates')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });

      await roomRef.delete();
    }

    window.location.reload();
  };

  return (
    <>
      <Grid w='100%' templateColumns='6fr 6fr' h='xl'>
        <GridItem
          w='100%'
          bgColor='gray.100'
          justifyContent='center'
          display='flex'
          alignItems='center'
        >
          <video id='myVideo' ref={localRef} autoPlay muted />
        </GridItem>
        <GridItem
          w='100%'
          bgColor='gray.200'
          justifyContent='center'
          display='flex'
          flexDir='column'
          alignItems='center'
        >
          <video id='myVideo' ref={remoteRef} autoPlay />
        </GridItem>
      </Grid>
      <HStack
        className='buttonsContainer'
        alignItems='center'
        justifyContent='center'
      >
        <HStack>
          <Button
            onClick={hangUp}
            disabled={!webcamActive}
            className='hangup button'
          >
            <HangupIcon />
          </Button>
          <Button
            leftIcon={<MoreIcon />}
            onClick={() => {
              navigator.clipboard.writeText(roomId);
            }}
          >
            <CopyIcon /> Copy joining code
          </Button>
        </HStack>
      </HStack>
      <Modal isOpen={!webcamActive}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Turn on your camera and microphone and start the call
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button variant='ghost' onClick={setupSources}>
              Start
            </Button>
            <Button variant='ghost' onClick={() => setPage('home')}>
              Cancel
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default VideoChat;
