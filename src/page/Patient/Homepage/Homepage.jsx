import React from 'react';
import {
  Text,
  Image,
  Grid,
  Heading,
  VStack,
  GridItem,
  Button,
  Flex,
  Card,
} from '@chakra-ui/react';
import PhysiopalHome from '../../../icons/Homepage/PhysiopalHome.png';
import MyExerciseHome from '../../../icons/Homepage/MyExerciseHome.png';
import TelemedicineHome from '../../../icons/Homepage/TelemedicineHome.png';
import GeneralExerciseHome from '../../../icons/Homepage/GeneralExerciseHome.png';
import { useSelector } from 'react-redux';
import useCheckUser from '../../../Hook/useCheckUser';

const Homepage = () => {
  useCheckUser('patient', '/patient/login');
  const user = useSelector((state) => state.user.data);
  return (
    <Grid w='100%' h='max'>
      <Grid w='100%' h='max' templateColumns='5fr 7fr' bgColor='teal.100'>
        <GridItem px={10} py={20}>
          <Heading size='lg' mb={5}>
            P H Y S I O P A L
          </Heading>
          <Heading size='md' mb={10}>
            Your best pal for online Physiotherapist
          </Heading>
          <Text mb={20}>
            Web application for Online Musculoskeletal Physiotherapy using
            Computer Vision and Deep Learning
          </Text>
          <Button
            // onClick={() => navigate('/patient/register')}
            bgColor='teal.400'
            textColor='white'
            variant='solid'
            type='submit'
            mb={5}
            size='lg'
            boxShadow='lg'
            _hover={{
              textDecoration: 'none',
              bg: 'teal.600',
            }}
          >
            Sign In
            {/* {' '}
                    {language === 'English' ? 'SIGN UP' : 'ลงทะเบียน'} */}
          </Button>
          <Flex flexDir='row' gap={6}>
            <Text mt={2} fontWeight='semibold'>
              Don't you have an acoount
            </Text>
            <Button
              // onClick={() => navigate('/patient/register')}
              colorScheme='teal.800'
              variant='ghost'
              type='submit'
              size='md'
              _hover={{
                textDecoration: 'none',
                bg: 'gray.100',
              }}
            >
              Sign Up Now
              {/* {' '}
                        {language === 'English' ? 'SIGN UP' : 'ลงทะเบียน'} */}
            </Button>
          </Flex>
        </GridItem>
        <GridItem px={8} py={5} mt={5}>
          <Image src={PhysiopalHome} />
        </GridItem>
      </Grid>
      <Grid w='100%' h='max' templateColumns='5fr 7fr' bgColor='white'>
        <GridItem px={10} py={14}>
          <Heading size='lg' mb={10}>
            Why Choose Us _______
          </Heading>
          <Text mb={10}>
            This web application will make it easier than ever for patients to
            access physical therapy online to treat injuries. Due to the
            epidemic situation of the COVID-19 virus, people's New-Normal
            behavior and lifestyle has been changed. Working from home becomes
            an important role in our lives. Repeated use of the same muscles
            long time may lead to disorders of the musculoskeletal system.
          </Text>
        </GridItem>
        <GridItem px={10} py={14}>
          <Flex flexDir='row' gap={6}>
            <Flex flexDir='column' gap={6}>
              <Card bgColor='teal.100' px={4} py={4} boxShadow='lg'>
                <Heading size='sm' mb={4}>
                  Doctor-patient communication system
                </Heading>
                <Text>
                  We are looking for a new way to communicate between patients
                  and doctors in a new normal situation.
                </Text>
              </Card>
              <Card bgColor='teal.100' px={4} py={4} boxShadow='lg'>
                <Heading size='sm' mb={4}>
                  A new way to access physiotherapy
                </Heading>
                <Text>
                  We are looking for a new way to access physiotherapy that is
                  easier and helps users take care of their health.
                </Text>
              </Card>
            </Flex>
            <Flex flexDir='column' gap={6}>
              <Card bgColor='teal.100' px={4} py={4} boxShadow='lg'>
                <Heading size='sm' mb={4}>
                  Injury Protection and treatment service
                </Heading>
                <Text>
                  We create a service that helps users protect and treatment of
                  injuries from musculoskeletal diseases.
                </Text>
              </Card>
              <Card bgColor='teal.100' px={4} py={4} boxShadow='lg'>
                <Heading size='sm' mb={4}>
                  Self exercise from home
                </Heading>
                <Text>
                  We increase the efficiency of physical-therapy for patient
                  exercise by computer vision and deep learning technology.
                </Text>
              </Card>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
      <Grid w='100%' h='max' bgColor='teal.50' px={10} py={14}>
        <VStack>
          <Heading size='lg' mb={10}>
            Our service
          </Heading>
        </VStack>
        <Grid w='100%' h='max' templateColumns='6fr 6fr' mb='10'>
          <GridItem mr={12} py={10}>
            <Image src={GeneralExerciseHome} />
          </GridItem>
          <GridItem py={14}>
            <Heading size='lg' mb={10}>
              General Exercise
            </Heading>
            <Text mb={10}>
              This web application will make it easier than ever for patients to
              access physical therapy online to treat injuries. Due to the
              epidemic situation of the COVID-19 virus, people's New-Normal
              behavior and lifestyle has been changed. Working from home becomes
              an important role in our lives. Repeated use of the same muscles
              long time may lead to disorders of the musculoskeletal system.
            </Text>
            <Button
              // onClick={() => navigate('/patient/register')}
              bgColor='teal.400'
              textColor='white'
              variant='solid'
              type='submit'
              size='lg'
              boxShadow='lg'
              _hover={{
                textDecoration: 'none',
                bg: 'teal.600',
              }}
            >
              Read more
              {/* {' '}
                        {language === 'English' ? 'SIGN UP' : 'ลงทะเบียน'} */}
            </Button>
          </GridItem>
        </Grid>
        <Grid w='100%' h='max' templateColumns='6fr 6fr' mb={10}>
          <GridItem py={12}>
            <Heading size='lg' mb={10}>
              General Exercise
            </Heading>
            <Text mb={10}>
              This web application will make it easier than ever for patients to
              access physical therapy online to treat injuries. Due to the
              epidemic situation of the COVID-19 virus, people's New-Normal
              behavior and lifestyle has been changed. Working from home becomes
              an important role in our lives. Repeated use of the same muscles
              long time may lead to disorders of the musculoskeletal system.
            </Text>
            <Button
              // onClick={() => navigate('/patient/register')}
              bgColor='teal.400'
              textColor='white'
              variant='solid'
              type='submit'
              size='lg'
              boxShadow='lg'
              _hover={{
                textDecoration: 'none',
                bg: 'teal.600',
              }}
            >
              Read more
              {/* {' '}
                        {language === 'English' ? 'SIGN UP' : 'ลงทะเบียน'} */}
            </Button>
          </GridItem>
          <GridItem ml={12} py={10}>
            <Image src={TelemedicineHome} />
          </GridItem>
        </Grid>
        <Grid w='100%' h='max' templateColumns='6fr 6fr' mb='10'>
          <GridItem mr={12} py={10}>
            <Image src={MyExerciseHome} />
          </GridItem>
          <GridItem py='12'>
            <Heading size='lg' mb={10}>
              General Exercise
            </Heading>
            <Text mb={10}>
              This web application will make it easier than ever for patients to
              access physical therapy online to treat injuries. Due to the
              epidemic situation of the COVID-19 virus, people's New-Normal
              behavior and lifestyle has been changed. Working from home becomes
              an important role in our lives. Repeated use of the same muscles
              long time may lead to disorders of the musculoskeletal system.
            </Text>
            <Button
              // onClick={() => navigate('/patient/register')}
              bgColor='teal.400'
              textColor='white'
              variant='solid'
              type='submit'
              size='lg'
              boxShadow='lg'
              _hover={{
                textDecoration: 'none',
                bg: 'teal.600',
              }}
            >
              Read more
              {/* {' '}
                        {language === 'English' ? 'SIGN UP' : 'ลงทะเบียน'} */}
            </Button>
          </GridItem>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
