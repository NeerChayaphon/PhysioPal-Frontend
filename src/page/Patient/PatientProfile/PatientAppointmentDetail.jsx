import React from 'react';
import {
  Grid,
  GridItem,
  Text,
  Flex,
  Input,
  Button,
  Image,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  Textarea,
} from '@chakra-ui/react';
import PatientProfileMenu from '../../../component/PatientProfile/PatientProfileMenu';
import Profile1 from '../../../icons/Exercise/Profile1.png';
import { useLocation } from 'react-router-dom';
import Loading from '../../../component/Loading/Loading';
import useGet from '../../../Hook/useGet';
import { useSelector } from 'react-redux';
import useCheckUser from '../../../Hook/useCheckUser';

const PatientAppointmentDetail = () => {
  useCheckUser('patient', '/patient/login');
  const {
    data: PT,
    error: PTerror,
    loading: PTLoading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/physiotherapists`
  );

  const location = useLocation();

  const language = useSelector((state) => state.language.value);
  const {
    data: Patient,
    error: PatientError,
    loading: PatientLoading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/patient/${location.state.appointment.Patient}`
  );

  console.log(Patient);

  return (
    <Grid h='max' w='100%' templateColumns='2fr 10fr'>
      <GridItem bgColor='teal.100' w='100%'>
        <PatientProfileMenu />
      </GridItem>
      {location.state === undefined ||
      PatientLoading ||
      Patient === null ||
      PTLoading ||
      PT === null ? (
        <Loading />
      ) : (
        <GridItem w='100%' bgColor='gray.100'>
          <VStack>
            <Text fontSize='3xl' fontWeight='bold' py={10} px={10}>
              {language === 'English' ? 'Appointment' : 'รายละเอียดการนัดหมาย'}
            </Text>
          </VStack>
          <Grid templateColumns='5fr 7fr'>
            <GridItem px={3} py={10}>
              <VStack spacing={10}>
                <Image borderRadius='full' boxSize='xxs' src={Profile1} />
                <Text fontSize='20px' fontWeight='bold'>
                  {Patient.data.Name}
                </Text>
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
                    defaultValue={new Date(location.state.appointment.Date)
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
                      location.state.appointment.Date
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
                  {language === 'English'
                    ? 'Physiotherapist'
                    : 'นักกายภาพบำบัด/เเพทย์'}
                </FormLabel>
                <InputGroup size='lg'>
                  <Input
                    variant='filled'
                    type='name'
                    // value={input}
                    // onChange={handleInputChange}
                    defaultValue={
                      language === 'English'
                        ? PT.data.find(
                            (obj) =>
                              obj._id ===
                              location.state.appointment.Physiotherapist
                          ).Details.En_Description.Name
                        : PT.data.find(
                            (obj) =>
                              obj._id ===
                              location.state.appointment.Physiotherapist
                          ).Details.Th_Description.Name
                    }
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
                    defaultValue={location.state.appointment.Injury}
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
                  {language === 'English'
                    ? 'Description and Treatment'
                    : 'คำอธิบายและการรักษา'}
                </FormLabel>
                <Textarea
                  defaultValue={location.state.appointment.Treatment}
                  required
                  bgColor='white'
                  mb={12}
                  w='lg'
                  h='sm'
                  boxShadow='lg'
                  readOnly={true}
                />
              </FormControl>
            </GridItem>
          </Grid>
        </GridItem>
      )}
    </Grid>
  );
};

export default PatientAppointmentDetail;
