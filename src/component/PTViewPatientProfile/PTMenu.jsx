import React from 'react';
import { Flex, Button, Box, useColorModeValue } from '@chakra-ui/react';
import { BsPeople } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { TbPhysotherapist } from 'react-icons/tb';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';

const PTMenu = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Flex h='100vh'>
      <Box bg='blue.100' px={4} py={4} w='100%'>
        <Button
          leftIcon={<BsPeople />}
          bgColor='blue.100'
          _hover={{ bg: useColorModeValue('blue.300', 'white') }}
          variant='solid'
          mb={3}
          w='100%'
          h='50px'
          justifyContent='start'
          onClick={() => navigate(`/physiotherapist/dashboard`)}
        >
          Past Appointment
        </Button>
        <Button
          leftIcon={<CgFileDocument />}
          bgColor='blue.100'
          _hover={{ bg: useColorModeValue('blue.300', 'white') }}
          variant='solid'
          mb={3}
          w='100%'
          h='50px'
          justifyContent='start'
          onClick={() => navigate(`/physiotherapist/profile`)}
        >
          Profile
        </Button>
      </Box>
    </Flex>
  );
};

export default PTMenu;
