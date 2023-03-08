import React from 'react'
import {
    Card,
    CardBody,
    Image,
    Text,
    Stack,
    Heading,
    Button,
    Grid,
    Flex,
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';

const TelemedicineDoctorCard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Grid px={10} py={8} templateColumns='repeat(5, 1fr)' gap={6}> 
            {/* <Flex>
                <Card bgColor='teal.100'>
                    <CardBody>
                        <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Flex> */}
            <Menu isOpen={isOpen}>
                <MenuButton
                     variant="ghost"
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='3'>
                        <Image
                            src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                            borderRadius='lg'
                            boxSize='210px'
                            mt={2}
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                                <Text align='center'>Physioterapist, Arm</Text>
                            </Stack>
                    </VStack>        
                </MenuButton>
                <MenuButton
                     variant="ghost"
                     mx={1}
                     py={[1, 2, 2]}
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        mt={2}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>        
                </MenuButton>
                <MenuButton
                     variant="ghost"
                     mx={1}
                     py={[1, 2, 2]}
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        mt={2}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>        
                </MenuButton>
                <MenuButton
                     variant="ghost"
                     mx={1}
                     py={[1, 2, 2]}
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        mt={2}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>        
                </MenuButton>
                <MenuButton
                     variant="ghost"
                     mx={1}
                     py={[1, 2, 2]}
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        mt={2}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>        
                </MenuButton>
                <MenuButton
                     variant="ghost"
                     mx={1}
                     py={[1, 2, 2]}
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        mt={2}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>        
                </MenuButton>
                <MenuButton
                     variant="ghost"
                     mx={1}
                     py={[1, 2, 2]}
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        mt={2}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>        
                </MenuButton>
                <MenuButton
                     variant="ghost"
                     mx={1}
                     py={[1, 2, 2]}
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        mt={2}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>        
                </MenuButton>
                <MenuButton
                     variant="ghost"
                     mx={1}
                     py={[1, 2, 2]}
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        mt={2}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>        
                </MenuButton>
                <MenuButton
                     variant="ghost"
                     mx={1}
                     py={[1, 2, 2]}
                     px={4}
                     borderRadius={5}
                     bgColor='teal.100'
                     _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                     aria-label="Courses"
                     fontWeight="normal"
                     w='max'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        mt={2}
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>        
                </MenuButton>
            </Menu>
        </Grid>
    )
}

export default TelemedicineDoctorCard
