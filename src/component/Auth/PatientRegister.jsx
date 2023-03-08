import React, { useRef } from 'react';
import { 
  Grid, 
  GridItem, 
  Text, 
  Flex, 
  Input, 
  Button, 
  Select, 
  Image,
  InputGroup, 
  InputLeftElement,
  Avatar,
  AvatarBadge,
  Badge,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { BsFillTelephoneFill, BsPeopleFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn, MdArrowDropDown } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaDisease } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useState } from "react";
import SingInPicture from '../../icons/Exercise/SingInPicture.png';

const PatientRegister = () => {
  const language = useSelector((state) => state.language.value);

  // ตรงนี้ ลองใช้โค้ดจาก https://github.com/neysidev/user-profile
  const [userProfile, setUserProfile] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const profileImage = useRef(null)

  const openChooseImage = () => {
    profileImage.current.click()
  }

  const changeProfileImage = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    const selected = event.target.files[0]

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => setUserProfile(reader.result)
      return reader.readAsDataURL(selected)
    }

    onOpen()
  }
  // ถึงตรงนี้

  return (
      <Grid w='100%' templateColumns='5fr 7fr' h='max' px={8} py={10} borderRadius='lg'>
        <GridItem
          w='100%'
          bgColor='teal.200'
          justifyContent='center'
          display='flex'
          alignItems='center'
        >
          <Flex flexDir='column' w='100%' alignItems='center'>
            <Image 
            src={SingInPicture} 
            px={10}
            mb={10}
            />   
            <Text fontSize='3xl' fontWeight='bold' mb={8}>
              {language === 'English' ? 'WELCOME BACK' : 'ยินดีต้อนรับ การกลับมาของคุณ'}
            </Text>
            <Text fontWeight='boid'>
              {language === 'English'
                ? 'To keep connected with us please'
                : 'หากต้องการเชื่อมต่อกับเราโปรด'}
            </Text>
            <Text fontWeight='boid' mb={6}>
              {language === 'English'
                ? 'login with your personal info'
                : 'เข้าสู่ระบบด้วยข้อมูลส่วนบุคคลของคุณ'}
            </Text>
            <Button
              /*onClick={() => navigate('/patient/register')}*/
              color='gray.700'
              w={24}
              variant='outline'
              borderColor='gray.200'
              _hover={{
                textDecoration: 'none',
                bg: 'gray.200',
              }}
            >
              {' '}
              {language === 'English' ? 'SIGN IN' : 'เข้าสู่ระบบ'}
            </Button>
            {/* <Button onClick={() => dispatch(setThai())}> Thai</Button>
            <Button onClick={() => dispatch(setEnglish())}> Eng</Button> */}
          </Flex>
        </GridItem>
        
        <GridItem
          w='100%'
          bgColor='gray.100'
          justifyContent='center'
          display='flex'
          alignItems='center'
        >
          <Flex flexDir='column' w='100%' alignItems='center' px={16} py={10}>
              <Text fontSize='3xl' fontWeight='bold' mb={2} mt={10}>
                Create Account
              </Text>
              <Text fontWeight='semibold' mb={6} py={4}>
                {/*language === 'English' ? 'Your email account' : 'บัญชีของคุณ'*/}
                Use your email for registration
              </Text>
              {/* <Box>
                <Image
                  borderRadius='full'
                  boxSize='150px'
                  mb={6}
                  src='https://bit.ly/dan-abramov'
                  alt='Dan Abramov'
                /> */}
                

              {/* ตรงนี้ ลองใช้โค้ดจาก https://github.com/neysidev/user-profile*/}

              <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
                <Avatar
                  size="2xl"
                  cursor="pointer"
                  onClick={openChooseImage}
                  src={userProfile ? userProfile : '/img/tim-cook.jpg'}
                  mb={6}
                >
                  {/* ปุ่มกดเพื่อเปลี่ยนรูป */}
                  <AvatarBadge bg="teal.300" boxSize="0.9em">
                    <svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      />
                    </svg>
                  </AvatarBadge>
                </Avatar>
                <input
                  hidden
                  type="file"
                  ref={profileImage}
                  onChange={changeProfileImage}
                />
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Something went wrong</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>File not supported!</Text>
                      <HStack mt={1}>
                        <Text color="brand.cadet" fontSize="sm">
                          Supported types:
                        </Text>
                        <Badge colorScheme="green">PNG</Badge>
                        <Badge colorScheme="green">JPG</Badge>
                        <Badge colorScheme="green">JPEG</Badge>
                      </HStack>
                    </ModalBody>

                    {/* <ModalFooter>
                      <Button onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                  </ModalContent>
                </Modal>
              </VStack>

              {/* ถึงตรงนี้ */}

              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<BsPeopleFill color='gray.100' />}
                />
                <Input variant='filled' type='name' placeholder='Name' 
                  required
                  bgColor='white'
                  borderColor='gray.300'
                  mb={6}/>
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<MdEmail color='gray.300' />}
                />
                <Input variant='filled' type='email' placeholder='Email' 
                  required
                  bgColor='white'
                  borderColor='gray.300'
                  mb={6}/>
              </InputGroup>
              
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<RiLockPasswordFill color='gray.300' />}
                />
                <Input variant='filled' type='password' placeholder='Password' 
                  required
                  bgColor='white'
                  borderColor='gray.300'
                  mb={6}/>
              </InputGroup>
              
              <InputGroup gap='4'>
                <InputLeftElement
                  pointerEvents='none'
                  children={<BsFillTelephoneFill color='gray.300' />}
                />
                <Input variant='filled' type='tel' placeholder='Phone number' 
                  required
                  bgColor='white'
                  borderColor='gray.300'
                  mb={6}
                  px={8}
                />
                <Select variant='filled' type='Gender' placeholder='Gender'
                  icon={<MdArrowDropDown />} 
                  required
                  bgColor='white'
                  borderColor='gray.300'
                  // textColor='gray.500'
                  mb={6}
                  >
                    <option value='option1'>Male</option>
                    <option value='option2'>Female</option>
                    <option value='option3'>Other</option>
                </Select>
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<FaDisease color='gray.300' />}
                />
                <Input variant='filled' type='congenital' placeholder='Congenital Disease' 
                  required
                  bgColor='white'
                  borderColor='gray.300'
                  mb={6}/>
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<MdLocationOn color='gray.300' />}
                />
                <Input variant='filled' type='address' placeholder='Address(option)' 
                  required
                  bgColor='white'
                  borderColor='gray.300'
                  mb={6}/>
              </InputGroup>

              <Button
                /*onClick={() => navigate('/patient/register')}*/
                bgColor='teal.400'
                color='white'
                type='submit'
                w={24}
                _hover={{
                  textDecoration: 'none',
                  bg: 'teal.300',
                }}
              >
              {' '}
              {language === 'English' ? 'SIGN UP' : 'ลงทะเบียน'}
              </Button>
            </Flex>
        </GridItem>
      </Grid>
  );
};

export default PatientRegister;
