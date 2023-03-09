import React from 'react'
import {
    Text,
    Heading,
  } from '@chakra-ui/react';

const TelemedicineHeader = () => {
    return (
        <div>
            <Heading size='lg' px={10} mt={8} mb={5}>Telemedicine</Heading>
            <Text fontSize='l' px={10}>
                Medical communication system physical therapists and patients directly through our web application. This allows you to receive services like having a personal physician during your physical therapy. Or whenever you want help and a physiotherapist can also prescribe exercises or treatment to patients online.
            </Text>
        </div>
    )
}

export default TelemedicineHeader
