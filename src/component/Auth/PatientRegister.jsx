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
  InputRightElement,
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
  VStack,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Spinner,
  FormLabel,
} from '@chakra-ui/react';
import { BsFillTelephoneFill, BsPeopleFill } from 'react-icons/bs';
import { MdEmail, MdLocationOn, MdArrowDropDown } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaDisease } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingInPicture from '../../icons/Exercise/SingInPicture.png';

const PatientRegister = () => {
  const language = useSelector((state) => state.language.value);

  // ตรงนี้ ลองใช้โค้ดจาก https://github.com/neysidev/user-profile
  const [userProfile, setUserProfile] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileImage = useRef(null);

  const [input, setInput] = useState('');
  const handleInputChange = (e) => setInput(e.target.value);
  // const isError = input === "";

  const openChooseImage = () => {
    profileImage.current.click();
  };

  const changeProfileImage = (event) => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
    const selected = event.target.files[0];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => setUserProfile(reader.result);
      return reader.readAsDataURL(selected);
    }

    onOpen();
  };
  // ถึงตรงนี้
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [congenitalDisease, setCongenitalDisease] = React.useState('');
  const [address, setAddress] = React.useState('');

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoading(true);
    if (name === '' || email === '' || password === '' || phone === '') {
      setError({ data: 'Please fill in all fields' });
      setLoading(false);
    } else {
      try {
        const response = await fetch(
          'https://physiopal-api-deploy-production.up.railway.app/patient',
          {
            method: 'POST',
            body: JSON.stringify({
              name,
              email,
              password,
              phone,
              address,
              gender,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          navigate('/');
        } else {
          setError(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Grid
      w='100%'
      templateColumns='5fr 7fr'
      h='max'
      px={10}
      py={10}
      borderRadius='lg'
    >
      <GridItem
        w='100%'
        bgColor='teal.200'
        justifyContent='center'
        display='flex'
        alignItems='center'
        borderLeftRadius='lg'
        boxShadow='lg'
      >
        <Flex flexDir='column' w='100%' alignItems='center'>
          <Image src={SingInPicture} px={20} mb={6} />
          <Text fontSize='3xl' fontWeight='bold' mb={8}>
            {language === 'English'
              ? 'WELCOME BACK'
              : 'ยินดีต้อนรับ การกลับมาของคุณ'}
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
            onClick={() => navigate('/patient/login')}
            color='gray.700'
            w={24}
            mt={4}
            size='lg'
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
        borderRightRadius='lg'
        boxShadow='lg'
      >
        <Flex flexDir='column' w='100%' alignItems='center' px={24} py={10}>
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

          <VStack
            spacing={3}
            py={5}
            borderBottomWidth={1}
            borderColor='brand.light'
          >
            <Avatar
              size='2xl'
              cursor='pointer'
              onClick={openChooseImage}
              src={userProfile ? userProfile : '/img/tim-cook.jpg'}
              mb={6}
            >
              {/* ปุ่มกดเพื่อเปลี่ยนรูป */}
              <AvatarBadge bg='teal.300' boxSize='0.9em'>
                <svg width='0.4em' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
                  />
                </svg>
              </AvatarBadge>
            </Avatar>
            <input
              hidden
              type='file'
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
                    <Text color='brand.cadet' fontSize='sm'>
                      Supported types:
                    </Text>
                    <Badge colorScheme='green'>PNG</Badge>
                    <Badge colorScheme='green'>JPG</Badge>
                    <Badge colorScheme='green'>JPEG</Badge>
                  </HStack>
                </ModalBody>

                {/* <ModalFooter>
                      <Button onClick={onClose}>Close</Button>
                    </ModalFooter> */}
              </ModalContent>
            </Modal>
          </VStack>

          {/* ถึงตรงนี้ */}
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <InputGroup size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<BsPeopleFill color='gray.100' />}
              />
              <Input
                variant='filled'
                type='name'
                // value={input}
                // onChange={handleInputChange}
                placeholder='Name'
                required
                bgColor='white'
                borderColor='gray.300'
                mb={4}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<MdEmail color='gray.300' />}
              />
              <Input
                variant='filled'
                type='email'
                // value={input}
                // onChange={handleInputChange}
                placeholder='Email'
                required
                bgColor='white'
                borderColor='gray.300'
                mb={4}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<RiLockPasswordFill color='gray.300' />}
              />
              <Input
                variant='filled'
                type={show ? 'text' : 'password'}
                placeholder='Password'
                required
                bgColor='white'
                borderColor='gray.300'
                mb={4}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width='4.5rem' mr={2}>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <InputGroup gap='4' size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<BsFillTelephoneFill color='gray.300' />}
              />
              <Input
                variant='filled'
                type='tel'
                placeholder='Phone number'
                required
                bgColor='white'
                borderColor='gray.300'
                mb={4}
                px={8}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              variant='filled'
              type='Gender'
              placeholder='Gender'
              icon={<MdArrowDropDown />}
              required
              bgColor='white'
              borderColor='gray.300'
              // textColor='gray.500'
              mb={4}
              mr={4}
              size='lg'
              onChange={(e) => setGender(e.target.value)}
            >
              <option value='option1'>Male</option>
              <option value='option2'>Female</option>
              <option value='option3'>Other</option>
            </Select>
          </FormControl>

          {/* <FormControl isRequired>
            <FormLabel>Congenital Disease</FormLabel>
            <InputGroup size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<FaDisease color='gray.300' />}
              />
              <Input
                variant='filled'
                type='congenital'
                placeholder='Congenital Disease'
                required
                bgColor='white'
                borderColor='gray.300'
                mb={4}
                onChange={(e) => setCongenitalDisease(e.target.value)}
              />
            </InputGroup>
          </FormControl> */}

          <FormControl>
            <FormLabel>Address</FormLabel>
            <InputGroup size='lg'>
              <InputLeftElement
                pointerEvents='none'
                children={<MdLocationOn color='gray.300' />}
              />
              <Input
                variant='filled'
                type='address'
                placeholder='Address(optional)'
                bgColor='white'
                borderColor='gray.300'
                mb={6}
                onChange={(e) => setAddress(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <Button
            /*onClick={() => navigate('/patient/register')}*/
            bgColor='teal.400'
            color='white'
            type='submit'
            w={24}
            mb={10}
            mt={8}
            size='lg'
            _hover={{
              textDecoration: 'none',
              bg: 'teal.300',
            }}
            onClick={() => handleSubmit()}
          >
            {' '}
            {!loading ? (
              <Text>{language === 'English' ? 'SIGN UP' : 'ลงทะเบียน'}</Text>
            ) : (
              <Spinner color='white' />
            )}
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default PatientRegister;
