import React from 'react'
import { 
    Grid, 
    GridItem, 
    Text, 
    Flex, 
    Input, 
    Button, 
    Image,
    VStack,
  } from '@chakra-ui/react';
  import PatientProfileMenu from '../../component/PatientProfile/PatientProfileMenu';
  import Profile1 from '../../icons/Exercise/Profile1.png';

const PatientAppointmentDetail = () => {
    return (
        <Grid h='max' w='100%' templateColumns='2fr 10fr'>
            <GridItem bgColor='teal.100' w='100%'>
                <PatientProfileMenu/>
            </GridItem>
            <GridItem
                w='100%'
                bgColor='gray.100'
                >
                    <VStack>
                        <Text fontSize='3xl' fontWeight='bold' py={10} px={10}>
                            Appointment Detail
                        </Text>
                    </VStack>
                    <Grid templateColumns='5fr 7fr'>
                        <GridItem px={3} py={10}>
                            <VStack>
                                <Image
                                borderRadius='full'
                                boxSize='xxs'
                                src={Profile1}
                                />
                                <Text fontSize='20px'fontWeight='bold'>
                                    Kamado Nezuko
                                </Text>  
                            </VStack>                                         
                        </GridItem>
                        <GridItem px={6} mt={5}>
                            <Flex flexDir='column'>
                                <Text fontSize='15px'>
                                    Date appointment
                                </Text>
                                <Text fontSize='15px' 
                                bgColor='white'
                                padding={3}
                                borderRadius='lg'
                                mt={2}
                                w='lg'
                                >
                                    Monday
                                </Text>
                            </Flex>
                            <Flex flexDir='column' mt={5}>
                                <Text fontSize='15px'>
                                    Time appointment
                                </Text>
                                <Text fontSize='15px' 
                                bgColor='white'
                                padding={3}
                                borderRadius='lg'
                                mt={2}
                                w='lg'
                                >
                                    11.00 - 11.30
                                </Text>
                            </Flex>
                            <Flex flexDir='column' mt={5}>
                                <Text fontSize='15px'>
                                    Illness
                                </Text>
                                <Text fontSize='15px' 
                                bgColor='white'
                                padding={3}
                                borderRadius='lg'
                                mt={2}
                                w='lg'
                                >
                                    Lower back pain
                                </Text>
                            </Flex>
                            <Flex flexDir='column' mt={5}>
                                <Text fontSize='15px'>
                                    Illness
                                </Text>
                                <Text fontSize='15px' 
                                bgColor='white'
                                padding={3}
                                borderRadius='lg'
                                mt={2}
                                mb={20}
                                w='lg'
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit fusce quis suspendisse erat. Feugiat ipsum fusce ante nec feugiat nunc, convallis suscipit. Ornare sit scelerisque nunc eu, id auctor quis amet. Faucibus eget dictumst odio dolor vivamus maecenas suspendisse egestas. Aliquam a ultricies nulla lacus, ut. Adipiscing sed cras velit dui cras bibendum laoreet velit. Imperdiet scelerisque rhoncus in molestie. Pellentesque ullamcorper nulla non sed. Dignissim euismod feugiat sagittis morbi vel purus. Sed amet, libero feugiat fames ultrices. Ridiculus elementum ut viverra gravida ut facilisi at suscipit sem. Vel consequat orci, vitae laoreet faucibus donec. Eu, quis at ac ultrices. Amet est porttitor dictum aliquam ac.
                                </Text>
                            </Flex>
                        </GridItem>
                    </Grid>
            </GridItem>
        </Grid>
    )
}

export default PatientAppointmentDetail
