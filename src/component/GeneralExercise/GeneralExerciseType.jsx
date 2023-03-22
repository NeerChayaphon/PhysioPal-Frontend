import React from 'react'
import {
    Image,
    Grid,
    useDisclosure,
    useColorModeValue,
    Heading,
    Menu,
    MenuButton,
    VStack,
} from '@chakra-ui/react';
import Back from '../../icons/MuscleType/Back.png';
import Knee from '../../icons/MuscleType/Knee.png';
import Shoulder from '../../icons/MuscleType/Shoulder.png';
import Neck from '../../icons/MuscleType/Neck.png';
import Elbow from '../../icons/MuscleType/Elbow.png';
import Hip from '../../icons/MuscleType/Hip.png';
import AchillesTendon from '../../icons/MuscleType/AchillesTendon.png';
import Ankle from '../../icons/MuscleType/Ankle.png';
import HeelOrFootSole from '../../icons/MuscleType/HeelOrFootSole.png';

const GeneralExerciseType = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Grid px={10} py={8} templateColumns='repeat(4, 1fr)' gap={10}>
            <Menu isOpen={isOpen} >
                <MenuButton
                    variant="ghost"
                    mx={1}
                    px={8}
                    borderRadius={5}
                    bgColor='gray.200'
                    _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                    aria-label="Courses"
                    fontWeight="normal"
                    w='max'
                    boxShadow='lg'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='6'>
                        <Image
                            src={Back}
                            borderRadius='lg'
                            boxSize='220px'
                            mt={5}
                            />
                            <Heading size='md' align='center'>Back</Heading>
                    </VStack>
                </MenuButton>
                <MenuButton
                    variant="ghost"
                    mx={1}
                    px={8}
                    borderRadius={5}
                    bgColor='gray.200'
                    _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                    aria-label="Courses"
                    fontWeight="normal"
                    w='max'
                    boxShadow='lg'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='6'>
                        <Image
                            src={Knee}
                            borderRadius='lg'
                            mt={5}
                            boxSize='220px'
                            />
                            <Heading size='md' align='center'>Knee</Heading>
                    </VStack>
                </MenuButton>
                <MenuButton
                    variant="ghost"
                    mx={1}
                    px={8}
                    borderRadius={5}
                    bgColor='gray.200'
                    _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                    aria-label="Courses"
                    fontWeight="normal"
                    w='max'
                    boxShadow='lg'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='6'>
                        <Image
                            src={Shoulder}
                            borderRadius='lg'
                            mt={5}
                            boxSize='220px'
                            />
                            <Heading size='md' align='center'>Shoulder</Heading>
                    </VStack>
                </MenuButton>
                <MenuButton
                    variant="ghost"
                    mx={1}
                    px={8}
                    borderRadius={5}
                    bgColor='gray.200'
                    _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                    aria-label="Courses"
                    fontWeight="normal"
                    w='max'
                    boxShadow='lg'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='6'>
                        <Image
                            src={Neck}
                            borderRadius='lg'
                            boxSize='220px'
                            mt={5}
                            />
                            <Heading size='md' align='center'>Neck</Heading>
                    </VStack>
                </MenuButton>
                <MenuButton
                    variant="ghost"
                    mx={1}
                    px={8}
                    borderRadius={5}
                    bgColor='gray.200'
                    _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                    aria-label="Courses"
                    fontWeight="normal"
                    w='max'
                    boxShadow='lg'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='6'>
                        <Image
                            src={Elbow}
                            borderRadius='lg'
                            boxSize='220px'
                            mt={5}
                            />
                            <Heading size='md' align='center'>Elbow</Heading>
                    </VStack>
                </MenuButton>
                <MenuButton
                    variant="ghost"
                    mx={1}
                    px={8}
                    borderRadius={5}
                    bgColor='gray.200'
                    _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                    aria-label="Courses"
                    fontWeight="normal"
                    w='max'
                    boxShadow='lg'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='6'>
                        <Image
                            src={Hip}
                            borderRadius='lg'
                            boxSize='220px'
                            mt={5}
                            />
                            <Heading size='md' align='center'>Hip</Heading>
                    </VStack>
                </MenuButton>
                <MenuButton
                    variant="ghost"
                    mx={1}
                    px={8}
                    borderRadius={5}
                    bgColor='gray.200'
                    _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                    aria-label="Courses"
                    fontWeight="normal"
                    w='max'
                    boxShadow='lg'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='6'>
                        <Image
                            src={AchillesTendon}
                            borderRadius='lg'
                            boxSize='220px'
                            mt={5}
                            />
                            <Heading size='md' align='center'>Achilles tendon</Heading>
                    </VStack>
                </MenuButton>
                <MenuButton
                    variant="ghost"
                    mx={1}
                    px={8}
                    borderRadius={5}
                    bgColor='gray.200'
                    _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                    aria-label="Courses"
                    fontWeight="normal"
                    w='max'
                    boxShadow='lg'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='6'>
                        <Image
                            src={Ankle}
                            borderRadius='lg'
                            boxSize='220px'
                            mt={5}
                            />
                            <Heading size='md' align='center'>Ankle</Heading>
                    </VStack>
                </MenuButton>
                <MenuButton
                    variant="ghost"
                    mx={1}
                    px={8}
                    borderRadius={5}
                    bgColor='gray.200'
                    _hover={{ bg: useColorModeValue("gray.400", "gray.600") }}
                    aria-label="Courses"
                    fontWeight="normal"
                    w='max'
                    boxShadow='lg'
                    //  onMouseEnter={onOpen}
                    //  onMouseLeave={onClose}   
                >  
                    <VStack py={5} spacing='6'>
                        <Image
                            src={HeelOrFootSole}
                            borderRadius='lg'
                            boxSize='220px'
                            mt={5}
                            />
                            <Heading size='md' align='center'>Heel or foot sole</Heading>
                    </VStack>
                </MenuButton>
            </Menu>
        </Grid>
    )
}

export default GeneralExerciseType
