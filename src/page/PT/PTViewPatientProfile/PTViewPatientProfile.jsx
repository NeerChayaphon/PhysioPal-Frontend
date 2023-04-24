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
import { useParams } from 'react-router-dom';
import PTViewPatientProfileMenu from '../../../component/PTViewPatientProfile/PTViewPatientProfileMenu';

const PTViewPatientProfile = () => {
  useCheckUser('physiotherapist', '/physiotherapist/login');

  const { id } = useParams();
  const [token, updateToken, deleteToken] = useCookie('token');

  const language = useSelector((state) => state.language.value);

  const [user, setUser] = useState(null);

  const [readOnly, setReadOnly] = useState(true);

  const [userProfile, setUserProfile] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const profileImage = useRef(null);

  useEffect(() => {
    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/patient/${id}`,
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

  return (
    <Grid h='max' w='100%' templateColumns='2fr 10fr'>
      <GridItem bgColor='blue.100' w='100%'>
        <PTViewPatientProfileMenu />
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
                src={userProfile ? userProfile : '/img/tim-cook.jpg'}
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
                />
              </FormControl>
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
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Gender' : 'เพศ'}
                </FormLabel>

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
                />
              </FormControl>
            </Flex>
          </Flex>
        </GridItem>
      )}
    </Grid>
  );
};

export default PTViewPatientProfile;
