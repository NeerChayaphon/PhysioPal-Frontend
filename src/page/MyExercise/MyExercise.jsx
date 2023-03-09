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
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    useDisclosure,
    Menu,
    MenuButton,
    useColorModeValue,
    Stack,
    Heading,
  } from '@chakra-ui/react';
  import CardMyExercise from '../../icons/Exercise/CardMyExercise.png';

const MyExercise = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Tabs isFitted variant='unstyled' >
            <TabList mb='1em' h='60px' bgColor='teal.400'>
                <Tab _selected={{ color: 'teal.600', bg: 'white' }}>General Exercise</Tab>
                <Tab _selected={{ color: 'teal.600', bg: 'white' }}>Therapeutical Exercise</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Heading size='md' align='center'>General Exercise</Heading>
                    <Grid px={10} py={8} templateColumns='repeat(4, 1fr)' gap={10}> 
                        <Menu isOpen={isOpen}>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                        </Menu>
                    </Grid>
                </TabPanel>

                <TabPanel>
                <Heading size='md' align='center'>Therapeutical Exercise</Heading>
                    <Grid px={10} py={8} templateColumns='repeat(4, 1fr)' gap={10}> 
                        <Menu isOpen={isOpen}>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                            <MenuButton
                                variant="ghost"
                                borderRadius='lg'
                                bgColor='teal.100'
                                _hover={{ bg: useColorModeValue("teal.300", "teal.500") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                w='max'
                                //  onMouseEnter={onOpen}
                                //  onMouseLeave={onClose}   
                            >  
                                <Image
                                src={CardMyExercise}
                                borderTopRadius='lg'
                                boxSize='xxs'
                                />
                                <Flex flexDir='column' py={6} px={6} justifyItems='left'>
                                    <Heading size='sm' textAlign='left' mb={2}>Set 1</Heading>
                                    <Text textAlign='left'>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. <br/> Non convallis venenatis <br/> nam dignissim tortor intet.</Text>
                                </Flex>     
                            </MenuButton>
                        </Menu>
                    </Grid>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default MyExercise
