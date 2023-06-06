import React from 'react';
import { Flex, Button, Box, useColorModeValue } from '@chakra-ui/react';
import { BsPeople } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { TbPhysotherapist } from 'react-icons/tb';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const PatientProfileMenu = () => {
  const navigate = useNavigate();
  return (
    <Flex h='100vh'>
      <Box bg='teal.100' px={4} py={4} w='100%'>
        <Button
          leftIcon={<BsPeople />}
          bgColor='teal.100'
          _hover={{ bg: useColorModeValue('teal.300', 'white') }}
          variant='solid'
          mb={3}
          w='100%'
          h='50px'
          justifyContent='start'
          onClick={() => navigate('/patient/profile')}
        >
          Profile
        </Button>
        <Button
          leftIcon={<CgFileDocument />}
          bgColor='teal.100'
          _hover={{ bg: useColorModeValue('teal.300', 'white') }}
          variant='solid'
          mb={3}
          w='100%'
          h='50px'
          justifyContent='start'
          onClick={() => navigate('/patient/profile/appointment')}
        >
          Appointment Record
        </Button>
        <Button
          leftIcon={<TbPhysotherapist />}
          bgColor='teal.100'
          _hover={{ bg: useColorModeValue('teal.300', 'white') }}
          variant='solid'
          mb={3}
          w='100%'
          h='50px'
          justifyContent='start'
          onClick={() => navigate('/patient/profile/exercise')}
        >
          Exercise Record
        </Button>
      </Box>
    </Flex>
  );
};

export default PatientProfileMenu;
