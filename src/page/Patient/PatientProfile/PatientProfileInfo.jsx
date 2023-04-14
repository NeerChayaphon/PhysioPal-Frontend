import React, { useEffect, useRef } from 'react';
import {
  Grid,
  GridItem,
  Text,
  Flex,
  Input,
  Button,
  Select,
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
  FormLabel,
  Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import PatientProfileMenu from '../../../component/PatientProfile/PatientProfileMenu';
import Loading from '../../../component/Loading/Loading';
import { useSelector } from 'react-redux';

const PatientProfileInfo = () => {
  const token = sessionStorage.getItem('token');

  const language = useSelector((state) => state.language.value);

  const [user, setUser] = useState(null);

  const [readOnly, setReadOnly] = useState(true);
  const [loadEdit, setLoadEdit] = useState(false);

  const [userProfile, setUserProfile] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileImage = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetch(
      'https://physiopal-api-deploy-production.up.railway.app/user/GetUserByJWT',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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

  const editPatient = () => {
    let tempUser = user.data;

    if (name !== '') {
      tempUser.Name = name;
    }

    if (email !== '') {
      tempUser.Email = email;
    }
    if (phone !== '') {
      tempUser.Phone = phone;
    }
    if (address !== '') {
      tempUser.Address = address;
    }
    if (gender !== '') {
      tempUser.Gender = gender;
    }
    setLoadEdit(true);

    let tempData = {
      address: tempUser.Address,
      congenitalDisease: tempUser.CongenitalDisease,
      email: tempUser.Email,
      exerciseHistory: tempUser.ExerciseHistory,
      name: tempUser.Name,
      password: tempUser.Password,
      phone: tempUser.Phone,
      photo: tempUser.Photo,
      gender: tempUser.Gender,
    };

    if (password !== '') {
      tempData.password = password;
    }

    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/patient/${tempUser._id}`,
      {
        method: 'PUT',
        body: JSON.stringify(tempData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    )
      .then(() => {
        setLoadEdit(false);
        setReadOnly(true);
      })
      .catch((error) => {
        setLoadEdit(false);
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Grid h='max' w='100%' templateColumns='2fr 10fr'>
      <GridItem bgColor='teal.100' w='100%'>
        <PatientProfileMenu />
      </GridItem>
      {user === null ? (
        <Loading />
      ) : (
        <GridItem w='100%' bgColor='gray.100'>
          <Flex flexDir='column' w='100%' alignItems='center' py={10} px={10}>
            <VStack>
              <Text fontSize='3xl' fontWeight='bold' mb={2} mt={5}>
                {language === 'English' ? 'Profile' : 'ข้อมูลส่วนตัว'}
              </Text>
            </VStack>
            <VStack spacing={3} py={5}>
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
            <Flex flexDir='row' gap={14} w='100%' px='20'>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Name' : 'ชื่อ-สกุล'}
                </FormLabel>
                <Input
                  variant='filled'
                  type='name'
                  defaultValue={user.data.Name}
                  required
                  bgColor='white'
                  mb={6}
                  w='100%'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </Flex>
            <Flex flexDir='row' gap={14} w='100%' px='20'>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Email' : 'อีเมล'}
                </FormLabel>
                <Input
                  variant='filled'
                  type='email'
                  defaultValue={user.data.Email}
                  required
                  bgColor='white'
                  mb={6}
                  w='md'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Password' : 'รหัสผ่าน'}
                </FormLabel>
                <Input
                  variant='filled'
                  type='password'
                  defaultValue='xxxxxxxxx'
                  required
                  bgColor='white'
                  mb={6}
                  w='md'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Flex>
            <Flex flexDir='row' gap={14} w='100%' px='20'>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Phone' : 'เบอร์โทรศัพท์'}
                </FormLabel>
                <Input
                  variant='filled'
                  type='tel'
                  defaultValue={user.data.Phone}
                  required
                  bgColor='white'
                  mb={6}
                  w='md'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Gender' : 'เพศ'}
                </FormLabel>
                {readOnly ? (
                  <Input
                    variant='filled'
                    type='address'
                    defaultValue={user.data.Gender}
                    required
                    bgColor='white'
                    mb={6}
                    w='md'
                    boxShadow='lg'
                    size='lg'
                    readOnly={readOnly}
                  />
                ) : (
                  <Select
                    variant='filled'
                    type='Gender'
                    defaultValue='Choose Gender'
                    icon={<MdArrowDropDown />}
                    required
                    bgColor='white'
                    mb={6}
                    w='md'
                    boxShadow='lg'
                    size='lg'
                    readOnly={readOnly}
                    // textColor='gray.500'
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value=''>----</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                  </Select>
                )}
              </FormControl>
            </Flex>
            <Flex flexDir='column' w='100%' px='20'>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Address' : 'ที่อยู่'}
                </FormLabel>
                <Input
                  variant='filled'
                  type='address'
                  defaultValue={user.data.Address}
                  required
                  bgColor='white'
                  mb={6}
                  w='100%'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
            </Flex>
            {readOnly ? (
              <Flex flexDir='row' gap={8} mb={10}>
                <Button
                  colorScheme='blue'
                  variant='outline'
                  mt={10}
                  size='lg'
                  onClick={() => setReadOnly(false)}
                >
                  {language === 'English' ? 'Edit' : 'แก้ไข'}
                </Button>
              </Flex>
            ) : (
              <Flex flexDir='row' gap={8} mb={10}>
                <Button
                  colorScheme='teal'
                  variant='outline'
                  mt={10}
                  size='lg'
                  onClick={() => setReadOnly(true)}
                >
                  {language === 'English' ? 'Cancel' : 'ยกเลิก'}
                </Button>
                <Button
                  colorScheme='teal'
                  variant='solid'
                  mt={10}
                  size='lg'
                  onClick={editPatient}
                >
                  {loadEdit && <Spinner />}
                  {!loadEdit && language === 'English' ? 'Save' : 'บันทึก'}
                </Button>
              </Flex>
            )}
          </Flex>
        </GridItem>
      )}
    </Grid>
  );
};

export default PatientProfileInfo;
