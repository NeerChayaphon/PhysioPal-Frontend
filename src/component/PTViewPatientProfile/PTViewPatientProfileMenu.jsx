import React from 'react'
import {
    Flex,
    Button,
    Box,
    useColorModeValue,
    } from '@chakra-ui/react';
import { BsPeople } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { TbPhysotherapist } from 'react-icons/tb';

const PTViewPatientProfileMenu = () => {
  return (
    <Flex>
            <Box bg='blue.100' px={4} py={4} w='100%'>
                <Button 
                    leftIcon={<BsPeople />} 
                    bgColor='blue.100'
                    _hover={{ bg: useColorModeValue("blue.400", "white") }}
                    variant='solid'
                    mb={3}
                    w='100%'
                    h='50px'
                    justifyContent='start'
                    >
                        Profile
                </Button>
                <Button 
                    leftIcon={<CgFileDocument />} 
                    bgColor='blue.100'
                    _hover={{ bg: useColorModeValue("blue.400", "white") }}
                    variant='solid'
                    mb={3}
                    w='100%'
                    h='50px'
                    justifyContent='start'
                    >
                        Appointment Record
                </Button>
                <Button 
                    leftIcon={<TbPhysotherapist />} 
                    bgColor='blue.100'
                    _hover={{ bg: useColorModeValue("blue.400", "white") }}
                    variant='solid'
                    mb={3}
                    w='100%'
                    h='50px'
                    justifyContent='start'
                    >
                        Exercise Record
                </Button>            
            </Box>
        </Flex>
  )
}

export default PTViewPatientProfileMenu