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
import { useCookie } from 'react-use';
import useCheckUser from '../../../Hook/useCheckUser';
import { uploadFile } from 'react-s3';
import AWS from 'aws-sdk';
import PTMenu from '../../../component/PTViewPatientProfile/PTMenu';

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET_PT;
const REGION = process.env.REACT_APP_REGION;
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const PTProfile = () => {
  useCheckUser('physiotherapist', '/physiotherapist/login');

  const [progress, setProgress] = useState(0);

  const uploadFile = (file) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });

    editPatientPhoto(`http://d17fv2iisozkp.cloudfront.net/${file.name}`);
  };

  const [token, updateToken, deleteToken] = useCookie('token');

  const language = useSelector((state) => state.language.value);

  const [user, setUser] = useState(null);

  const [readOnly, setReadOnly] = useState(true);
  const [loadEdit, setLoadEdit] = useState(false);

  const [userProfile, setUserProfile] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileImage = useRef(null);

  const [EN_name, setEN_name] = useState('');
  const [TH_name, setTH_name] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [background, setBackground] = useState('');
  const [hospital, setHospital] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

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

    uploadFile(selected);

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => setUserProfile(reader.result);
      return reader.readAsDataURL(selected);
    }

    onOpen();
  };

  const editPatient = () => {
    let tempUser = user.data;

    if (EN_name !== '') {
      tempUser.Details.En_Description.Name = EN_name;
    }
    if (TH_name !== '') {
      tempUser.Details.Th_Description.Name = TH_name;
    }
    if (email !== '') {
      tempUser.email = email;
    }
    if (phone !== '') {
      tempUser.phone = phone;
    }
    if (specialization !== '') {
      tempUser.Details.En_Description.Specialization = specialization;
      tempUser.Details.Th_Description.Specialization = specialization;
    }
    if (background !== '') {
      tempUser.Details.En_Description.Background = background;
      tempUser.Details.Th_Description.Background = background;
    }
    if (hospital !== '') {
      tempUser.Details.En_Description.Hospital = hospital;
      tempUser.Details.Th_Description.Hospital = hospital;
    }
    setLoadEdit(true);

    let tempData = {
      email: tempUser.email,
      name: tempUser.Name,
      phone: tempUser.phone,
      photo: tempUser.photo,
      details: {
        En_Description: {
          Name: tempUser.Details.En_Description.Name,
          Specialization: tempUser.Details.En_Description.Specialization,
          Background: tempUser.Details.En_Description.Background,
          Hospital: tempUser.Details.En_Description.Hospital,
        },
        Th_Description: {
          Name: tempUser.Details.Th_Description.Name,
          Specialization: tempUser.Details.Th_Description.Specialization,
          Background: tempUser.Details.Th_Description.Background,
          Hospital: tempUser.Details.Th_Description.Hospital,
        },
      },
    };

    if (password !== '') {
      tempData.password = password;
    }

    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/physiotherapist/${tempUser._id}`,
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

  const editPatientPhoto = (photo) => {
    let tempUser = user.data;

    setLoadEdit(true);

    let tempData = {
      email: tempUser.email,
      name: tempUser.Name,
      phone: tempUser.phone,
      photo: photo,
      details: {
        En_Description: {
          Name: tempUser.Details.En_Description.Name,
          Specialization: tempUser.Details.En_Description.Specialization,
          Background: tempUser.Details.En_Description.Background,
          Hospital: tempUser.Details.En_Description.Hospital,
        },
        Th_Description: {
          Name: tempUser.Details.Th_Description.Name,
          Specialization: tempUser.Details.Th_Description.Specialization,
          Background: tempUser.Details.Th_Description.Background,
          Hospital: tempUser.Details.Th_Description.Hospital,
        },
      },
    };

    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/physiotherapist/${tempUser._id}`,
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

  console.log(user);

  return (
    <Grid h='max' w='100%' templateColumns='2fr 10fr'>
      <GridItem bgColor='blue.100' w='100%'>
        <PTMenu />
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
                src={
                  userProfile
                    ? userProfile
                    : user.data.photo
                    ? user.data.photo
                    : '/img/tim-cook.jpg'
                }
                mb={6}
              >
                {/* ปุ่มกดเพื่อเปลี่ยนรูป */}
                <AvatarBadge bg='blue.300' boxSize='0.9em'>
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
                  {language === 'English'
                    ? 'Name (English)'
                    : 'ชื่อ-สกุล (ภาษาอังกฤษ)'}
                </FormLabel>
                <Input
                  variant='filled'
                  type='name'
                  defaultValue={user.data.Details.En_Description.Name}
                  required
                  bgColor='white'
                  mb={6}
                  w='100%'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setEN_name(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  {language === 'English'
                    ? 'Name (Thai)'
                    : 'ชื่อ-สกุล (ภาษาไทย)  '}
                </FormLabel>
                <Input
                  variant='filled'
                  type='name'
                  defaultValue={user.data.Details.Th_Description.Name}
                  required
                  bgColor='white'
                  mb={6}
                  w='100%'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setTH_name(e.target.value)}
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
                  defaultValue={user.data.email}
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
                  defaultValue={user.data.phone}
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
                  {language === 'English' ? 'Specialization' : 'เเผนก'}
                </FormLabel>
                <Input
                  variant='filled'
                  type='address'
                  defaultValue={
                    language === 'English'
                      ? user.data.Details.En_Description.Specialization
                      : user.data.Details.Th_Description.Specialization
                  }
                  required
                  bgColor='white'
                  mb={6}
                  w='md'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
              </FormControl>
            </Flex>
            <Flex flexDir='column' w='100%' px='20'>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Background' : 'ประวัติ'}
                </FormLabel>
                <Input
                  variant='filled'
                  type='address'
                  defaultValue={
                    language === 'English'
                      ? user.data.Details.En_Description.Background
                      : user.data.Details.Th_Description.Background
                  }
                  required
                  bgColor='white'
                  mb={6}
                  w='100%'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setBackground(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Hospital' : 'โรงพยาบาล'}
                </FormLabel>
                <Input
                  variant='filled'
                  type='address'
                  defaultValue={
                    language === 'English'
                      ? user.data.Details.En_Description.Hospital
                      : user.data.Details.Th_Description.Hospital
                  }
                  required
                  bgColor='white'
                  mb={6}
                  w='100%'
                  boxShadow='lg'
                  size='lg'
                  readOnly={readOnly}
                  onChange={(e) => setHospital(e.target.value)}
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
                  colorScheme='blue'
                  variant='outline'
                  mt={10}
                  size='lg'
                  onClick={() => setReadOnly(true)}
                >
                  {language === 'English' ? 'Cancel' : 'ยกเลิก'}
                </Button>
                <Button
                  colorScheme='blue'
                  variant='solid'
                  mt={10}
                  size='lg'
                  onClick={editPatient}
                >
                  {loadEdit ? (
                    <Spinner />
                  ) : language === 'English' ? (
                    'Save'
                  ) : (
                    'บันทึก'
                  )}
                </Button>
              </Flex>
            )}
          </Flex>
        </GridItem>
      )}
    </Grid>
  );
};

export default PTProfile;
