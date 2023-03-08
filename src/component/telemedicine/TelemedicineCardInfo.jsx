import React from 'react'
import {
    Button,
    Image,
    Text,
    Grid,
    Flex,
    GridItem,
  } from '@chakra-ui/react';
import { BsFillTelephoneFill } from 'react-icons/bs';

const TelemedicineCardInfo = () => {
    return (
            <Grid w='100%' templateColumns='4fr 8fr' h='80vh' px={8} py={10}>
                <GridItem
                    w='100%'
                    bgColor='teal.100'
                    justifyContent='center'
                    display='flex'
                    alignItems='center'
                    borderLeftRadius='lg'
                    >
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                        py={10}
                        px={10}
                    />    
                </GridItem>

                <GridItem
                    w='100%'
                    bgColor='gray.100'
                    borderRightRadius='lg'
                    px={10}
                    >
                    <Flex flexDir='column' mt={10}>
                        <Text fontSize='15px'>
                            Name
                        </Text>
                        <Text fontSize='15px' 
                        bgColor='white'
                        padding={3}
                        borderRadius='lg'
                        mt={2}
                        w='sm'
                        >
                            Dr. KAMADO TANJIRO
                        </Text>
                    </Flex>
                    <Flex flexDir='column' mt={5}>
                        <Text fontSize='15px'>
                            Department
                        </Text>
                        <Text fontSize='15px' 
                        bgColor='white'
                        padding={3}
                        borderRadius='lg'
                        mt={2}
                        w='sm'
                        >
                            Physioterapist, arm
                        </Text>
                    </Flex>
                    <Flex flexDir='column' mt={5}>
                        <Text fontSize='15px'>
                            About
                        </Text>
                        <Text fontSize='15px' 
                        bgColor='white'
                        padding={3}
                        borderRadius='lg'
                        mt={2}
                        w='100%'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non convallis venenatis nam dignissim tortor integer imperdiet dignissim ac. Urna aenean cras eget orci, augue nisl nunc, vitae odio. Tellus tincidunt facilisi dui nisi, volutpat enim ultricies. Faucibus nec fermentum elementum morbi tempor molestie egestas sem.
                        </Text>
                    </Flex>
                    <Button leftIcon={<BsFillTelephoneFill />} 
                    colorScheme='teal' 
                    variant='solid'
                    mt={10}
                    size='lg'
                    >
                        Make a video call
                    </Button>
                </GridItem>    
                
            </Grid>
    )
}

export default TelemedicineCardInfo
