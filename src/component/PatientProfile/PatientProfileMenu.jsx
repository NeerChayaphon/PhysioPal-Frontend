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
import { BiLogOut } from 'react-icons/bi';

const PatientProfileMenu = () => {
    return (
        <Flex>
            <Box bg='teal.100' px={4} py={4} w='100%'>
                <Button 
                    leftIcon={<BsPeople />} 
                    bgColor='teal.100'
                    _hover={{ bg: useColorModeValue("teal.300", "white") }}
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
                    bgColor='teal.100'
                    _hover={{ bg: useColorModeValue("teal.300", "white") }}
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
                    bgColor='teal.100'
                    _hover={{ bg: useColorModeValue("teal.300", "white") }}
                    variant='solid'
                    mb={3}
                    w='100%'
                    h='50px'
                    justifyContent='start'
                    >
                        Exercise Record
                </Button>
                <Button 
                    leftIcon={<BiLogOut />} 
                    bgColor='teal.100'
                    _hover={{ bg: useColorModeValue("teal.300", "white") }}
                    variant='solid'
                    mb={3}
                    w='100%'
                    h='50px'
                    justifyContent='start'
                    >
                        Log out
                </Button>               
            </Box>
        </Flex>
        
    )
}

export default PatientProfileMenu
