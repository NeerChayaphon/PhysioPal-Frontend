import React from 'react'
import {
    Flex,
    Button,
    Box,
    useColorModeValue,
    } from '@chakra-ui/react';
import { BsPeople } from 'react-icons/bs';
import { TbPhysotherapist } from 'react-icons/tb';

const PTDashboardMenu = () => {
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
                        Patient Information
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
                        Therapeutical Exercise
                </Button>            
            </Box>
        </Flex>
  )
}

export default PTDashboardMenu