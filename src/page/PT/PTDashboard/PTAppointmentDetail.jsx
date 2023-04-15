import React, { useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Text,
  Flex,
  Input,
  Button,
  Image,
  VStack,
  Textarea,
  FormControl,
  FormLabel,
  InputGroup,
  Spinner,
} from '@chakra-ui/react';
import PTDashboardMenu from '../../../component/PTDashboard/PTDashboardMenu';
import Profile1 from '../../../icons/Exercise/Profile1.png';
import { useParams } from 'react-router-dom';
import useGet from '../../../Hook/useGet';
import { useSelector } from 'react-redux';
import Loading from '../../../component/Loading/Loading';
import { useCookie } from 'react-use';

const PTAppointmentDetail = () => {
  const language = useSelector((state) => state.language.value);
  const [token, updateToken, deleteToken] = useCookie('token');
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  const [readOnly, setReadOnly] = useState(true);
  const [loadEdit, setLoadEdit] = useState(false);

  const [injury, setInjury] = useState('');
  const [treatment, setTreatment] = useState('');

  const {
    data: appointment,
    error,
    loading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/appointment/${id}`
  );

  useEffect(() => {
    if (appointment != null) {
      fetch(
        `https://physiopal-api-deploy-production.up.railway.app/patient/${appointment.data.Patient}`,
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
          setPatient(data);
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [appointment]);

  const editAppointment = () => {
    let tempAppointment = appointment.data;
    if (injury !== '') {
      tempAppointment.Injury = injury;
    }
    if (treatment !== '') {
      tempAppointment.Treatment = treatment;
    }

    setLoadEdit(true);

    let tempData = {
      patient: tempAppointment.Patient,
      physiotherapist: tempAppointment.Physiotherapist,
      date: tempAppointment.Date,
      injury: tempAppointment.Injury,
      treatment: tempAppointment.Treatment,
      therapeuticExercise: tempAppointment.TherapeuticExercise,
    };

    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/appointment/${id}`,
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
      <GridItem bgColor='blue.100' w='100%'>
        <PTDashboardMenu appointmentId={id} />
      </GridItem>
      {patient === null || appointment === null ? (
        <Loading />
      ) : (
        <GridItem w='100%' bgColor='gray.100'>
          <VStack>
            <Text fontSize='3xl' fontWeight='bold' py={10} px={10}>
              {language === 'English'
                ? 'Appointment Detail'
                : 'รายละเอียดการนัดหมาย'}
            </Text>
          </VStack>
          <Grid templateColumns='5fr 7fr'>
            <GridItem px={3} py={10}>
              <VStack spacing={10}>
                <Image borderRadius='full' boxSize='xxs' src={Profile1} />
                <Text fontSize='20px' fontWeight='bold'>
                  {patient.data.Name}
                </Text>
                <Button
                  colorScheme='blue'
                  variant='outline'
                  mt={10}
                  size='lg'
                  mb={5}
                >
                  View patient profile
                </Button>
              </VStack>
            </GridItem>
            <GridItem px={6} mt={5}>
              <FormControl>
                <FormLabel>
                  {language === 'English'
                    ? 'Date appointment'
                    : 'วันการนัดหมาย'}
                </FormLabel>
                <InputGroup size='lg'>
                  <Input
                    variant='filled'
                    type='name'
                    // value={input}
                    // onChange={handleInputChange}
                    defaultValue={new Date(appointment.data.Date)
                      .toISOString()
                      .substr(0, 10)}
                    required
                    bgColor='white'
                    mb={4}
                    w='lg'
                    boxShadow='lg'
                    readOnly={true}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Time appointment' : 'เวลานัด'}
                </FormLabel>
                <InputGroup size='lg'>
                  <Input
                    variant='filled'
                    type='name'
                    // value={input}
                    // onChange={handleInputChange}
                    defaultValue={new Date(
                      appointment.data.Date
                    ).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    })}
                    required
                    bgColor='white'
                    mb={4}
                    w='lg'
                    boxShadow='lg'
                    readOnly={true}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>
                  {language === 'English' ? 'Illness' : 'อาการ'}
                </FormLabel>
                <InputGroup size='lg'>
                  <Input
                    variant='filled'
                    type='name'
                    // value={input}
                    // onChange={handleInputChange}
                    defaultValue={appointment.data.Injury}
                    required
                    bgColor='white'
                    mb={4}
                    w='lg'
                    boxShadow='lg'
                    readOnly={readOnly}
                    onChange={(e) => setInjury(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>
                  {language === 'English'
                    ? 'Description and Treatment'
                    : 'คำอธิบายและการรักษา'}
                </FormLabel>
                <Textarea
                  defaultValue={appointment.data.Treatment}
                  required
                  bgColor='white'
                  mb={4}
                  w='lg'
                  h='sm'
                  boxShadow='lg'
                  readOnly={readOnly}
                  onChange={(e) => setTreatment(e.target.value)}
                />
              </FormControl>
              {readOnly ? (
                <Flex flexDir='row' mb={5}>
                  <Button
                    colorScheme='blue'
                    variant='solid'
                    mt={10}
                    size='lg'
                    //height='60px'
                    width='100px'
                    mb={5}
                    mr={6}
                    onClick={() => setReadOnly(false)}
                  >
                    {language === 'English' ? 'Edit' : 'แก้ไข'}
                  </Button>{' '}
                </Flex>
              ) : (
                <Flex flexDir='row' mb={5}>
                  <Button
                    colorScheme='red'
                    variant='solid'
                    mt={10}
                    size='lg'
                    //height='60px'
                    width='100px'
                    mb={5}
                    mr={6}
                    onClick={() => setReadOnly(true)}
                  >
                    {language === 'English' ? 'Cancel' : 'ยกเลิก'}
                  </Button>
                  {loadEdit && (
                    <Button
                      colorScheme='teal'
                      variant='solid'
                      mt={10}
                      size='lg'
                      //height='60px'
                      width='100px'
                      mb={5}
                      onClick={editAppointment}
                    >
                      <Spinner />
                    </Button>
                  )}

                  {!loadEdit && (
                    <Button
                      colorScheme='teal'
                      variant='solid'
                      mt={10}
                      size='lg'
                      //height='60px'
                      width='100px'
                      mb={5}
                      onClick={editAppointment}
                    >
                      {language === 'English' ? 'Confirm' : 'ยื่นยัน'}
                    </Button>
                  )}
                </Flex>
              )}
            </GridItem>
          </Grid>
        </GridItem>
      )}
    </Grid>
  );
};

export default PTAppointmentDetail;
