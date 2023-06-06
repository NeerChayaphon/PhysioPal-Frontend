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
  Square,
  Center,
  Box,
  Icon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Card,
  Stack,
  CardBody,
  Heading,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spinner,
  Badge,
} from '@chakra-ui/react';
import PTDashboardMenu from '../../../component/PTDashboard/PTDashboardMenu';
import Profile1 from '../../../icons/Exercise/Profile1.png';
import { MdHourglassDisabled } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { BsCheckLg } from 'react-icons/bs';

import { useParams } from 'react-router-dom';
import useGet from '../../../Hook/useGet';
import { useSelector } from 'react-redux';
import Loading from '../../../component/Loading/Loading';
import { useCookie } from 'react-use';
import useCheckUser from '../../../Hook/useCheckUser';

const PTTherapeuticalExercise = () => {
  useCheckUser('physiotherapist', '/physiotherapist/login');
  const language = useSelector((state) => state.language.value);
  const [token, updateToken, deleteToken] = useCookie('token');
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [TE, setTE] = useState(null);
  const [ExerciseToAdd, setExerciseToAdd] = useState([]);
  const [defaultLength, setDefaultLength] = useState(0);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const [submit, setSubmit] = useState(false);

  const { data: appointment, error } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/appointment/${id}`
  );

  const {
    data: exercises,
    error: exerciseError,
    loading: exerciseLoading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/exercises`
  );

  const {
    data: muscleType,
    error: muscleTypeError,
    loading: muscleTypeLoading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/musculoskeltalTypes`
  );

  console.log(muscleType);

  // console.log(exercises);

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
          // console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      if (appointment.data.TherapeuticExercise !== '000000000000000000000000') {
        fetch(
          `https://physiopal-api-deploy-production.up.railway.app/therapeuticExercise/${appointment.data.TherapeuticExercise}`,
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
            setTE(data);
            // console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }
    }
  }, [appointment]);

  console.log('appointment');
  console.log(appointment);

  console.log('exercises');
  console.log(exercises);

  console.log('patient');
  console.log(patient);

  console.log('TE');
  console.log(TE);

  console.log('ExerciseToAdd');
  console.log(ExerciseToAdd);

  // if (TE && exercises) {
  //   console.log(
  //     exercises.data.find((obj) => obj._id === TE.data.ExerciseSet[0].exercise)
  //       .Steps
  //   );
  // }

  useEffect(() => {
    if (TE) {
      setExerciseToAdd(TE.data.ExerciseSet);
      setDefaultLength(TE.data.ExerciseSet.length);
    }
  }, [TE]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState('inside');
  const btnRef = React.useRef(null);

  const handleRemove = (index) => {
    const newArray = ExerciseToAdd.filter((item, i) => i !== index);
    setExerciseToAdd(newArray);
  };

  const addExerciseToDB = () => {
    setSubmit(true);
    console.log(ExerciseToAdd);
    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/therapeuticExercise`,
      {
        method: 'POST',
        body: JSON.stringify({
          Details: {
            En_Description: {
              Name: 'Therapeutical ',
              Description: 'description eng',
            },
            Th_Description: {
              Name: 'การออกกำลังกายเพื่อการบำบัด ',
              Description: 'คำอธิบาย',
            },
          },
          StartDate: new Date(from),
          EndDate: new Date(to),
          ExerciseSet: ExerciseToAdd,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateAppointment(data.data.InsertedID);
        setSubmit(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const updateExerciseToDB = () => {
    setSubmit(true);
    console.log(ExerciseToAdd);
    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/therapeuticExercise/${appointment.data.TherapeuticExercise}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          Details: {
            En_Description: {
              Name: 'Therapeutical ',
              Description: 'description eng',
            },
            Th_Description: {
              Name: 'การออกกำลังกายเพื่อการบำบัด ',
              Description: 'คำอธิบาย',
            },
          },
          StartDate: from != '' ? new Date(from) : TE.data.StartDate,
          EndDate: to != '' ? new Date(to) : TE.data.EndDate,
          ExerciseSet: ExerciseToAdd,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubmit(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const updateAppointment = (TEId) => {
    fetch(
      `https://physiopal-api-deploy-production.up.railway.app/appointment/${appointment.data._id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          Patient: appointment.data.Patient,
          Physiotherapist: appointment.data.Physiotherapist,
          Date: appointment.data.Date,
          Injury: appointment.data.Injury,
          Treatment: appointment.data.Treatment,
          TherapeuticExercise: TEId,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const ExerciseModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOpenSub, setIsOpenSub] = useState(false);

    const [exercise, SetExercise] = useState(null);
    const [timePeriod, SetTimePeriod] = useState('1');
    const [reps, SetReps] = useState('1');

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const addToSet = () => {
      const newArray = [
        ...ExerciseToAdd,
        {
          exercise: exercise,
          TimePeriod: parseInt(timePeriod),
          Reps: parseInt(reps),
        },
      ];

      setExerciseToAdd(newArray);

      setIsOpenSub(false);
      onClose();
    };

    if (exercises === null) {
      return <Loading />;
    }

    return (
      <>
        <Button
          ref={btnRef}
          onClick={onOpen}
          colorScheme='teal'
          variant='solid'
          size='sm'
          leftIcon={<BsPlusLg />}
        >
          Add Exercise
        </Button>

        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
          size='full'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Exercises</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                  {exercises.data.map((item, index) => {
                    return (
                      <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        boxShadow='lg'
                        w='max'
                        _hover={{ boxShadow: 'xl', bgColor: 'gray.100' }}
                        onClick={() => {
                          SetExercise(item._id);
                          setIsOpenSub(true);
                        }}
                      >
                        <Image
                          mx={2}
                          objectFit='cover'
                          maxW={{ base: '100%', sm: '150px' }}
                          src={item.Steps[item.Steps.length - 1].Image}
                        />
                        <Stack>
                          <CardBody boxSize='md'>
                            <Heading size='md'>
                              {item != null && language === 'English'
                                ? item.Details.En_Description.Name
                                : item.Details.Th_Description.Name}
                            </Heading>
                            <Badge
                              colorScheme={
                                muscleType.data.find(
                                  (obj) =>
                                    obj._id === item.MusculoskeltalTypes[0]
                                ).Color
                              }
                            >
                              {
                                muscleType.data.find(
                                  (obj) =>
                                    obj._id === item.MusculoskeltalTypes[0]
                                ).Type.En_Description.Name
                              }
                            </Badge>
                            <Text py='2'>
                              {item != null && language === 'English'
                                ? item.Details.En_Description.Description
                                : item.Details.Th_Description.Description}
                            </Text>
                          </CardBody>
                        </Stack>
                      </Card>
                    );
                  })}
                </Grid>
              </VStack>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpenSub}
                onClose={() => setIsOpenSub(false)}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add Exercise Details</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Time peroid for each reps (Sec)</FormLabel>
                      <NumberInput
                        defaultValue={1}
                        min={1}
                        onChange={(value) => SetTimePeriod(value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Repetitions</FormLabel>
                      <NumberInput
                        defaultValue={1}
                        min={1}
                        onChange={(value) => SetReps(value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme='blue'
                      mr={3}
                      onClick={() => addToSet()}
                    >
                      Save
                    </Button>
                    <Button onClick={() => setIsOpenSub(false)}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <Grid h='680px' w='100%' templateColumns='2fr 10fr'>
      <GridItem bgColor='blue.100' w='100%'>
        <PTDashboardMenu appointmentId={id} />
      </GridItem>
      {patient === null || appointment === null ? (
        <Loading />
      ) : (
        <GridItem w='100%' bgColor='gray.100' px='14' py='10'>
          <VStack>
            <Text fontSize='3xl' fontWeight='bold' py={10} px={10}>
              Therapeutical Exercise
            </Text>
          </VStack>
          {/* <Flex
            flexDir='row'
            bgColor='white'
            px='4'
            py='4'
            borderRadius={'lg'}
            boxShadow='lg'
            mb={8}
          >
            <Center w='140px'>
              <Square size='60px' bgColor='white' borderRadius='lg'>
                <Image src={Profile1} />
              </Square>
            </Center>
            <Center w='200px'>
              <Text fontSize='15px' fontWeight={'semibold'}>
                {patient.data.Name}
              </Text>
            </Center>
            <Center w='196px'>
              <Text fontSize='15px' fontWeight={'semibold'}>
                {appointment.data.Injury}
              </Text>
            </Center>
            <Center w='220px'>
              <Text fontSize='15px' fontWeight={'semibold'}>
                {new Date(appointment.data.Date).toISOString().substr(0, 10)}
              </Text>
            </Center>
            <Center w='176px'>
              <Text fontSize='15px' fontWeight={'semibold'}>
                {new Date(appointment.data.Date).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                })}
              </Text>
            </Center>
          </Flex> */}
          <Text fontSize='15px' fontWeight={'semibold'} mb={4}>
            Assigned date and exercises to this patient.
          </Text>
          {/* หน้า therapeutical exercise: empty list exercise  */}
          <HStack
            bgColor='white'
            px='4'
            py='4'
            borderRadius={'lg'}
            boxShadow='lg'
            w='full'
            spacing={4}
            mb={8}
          >
            <Text fontSize='15px' fontWeight={'semibold'}>
              From
            </Text>
            <Input
              defaultValue={
                TE && new Date(TE.data.StartDate).toISOString().substr(0, 16)
              }
              placeholder='Select Date and Time'
              size='md'
              type='datetime-local'
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            />

            <Text fontSize='15px' fontWeight={'semibold'}>
              To
            </Text>
            <Input
              defaultValue={
                TE && new Date(TE.data.EndDate).toISOString().substr(0, 16)
              }
              placeholder='Select Date and Time'
              size='md'
              type='datetime-local'
              onChange={(e) => {
                setTo(e.target.value);
              }}
            />
          </HStack>
          {ExerciseToAdd.length === 0 && (
            <VStack
              bgColor='white'
              px='4'
              py='4'
              borderRadius={'lg'}
              boxShadow='lg'
              w='full'
              spacing={4}
            >
              <Text
                fontSize='md'
                fontWeight='semibold'
                mt={4}
                mb={4}
                px={10}
                color='gray'
              >
                The set of exercise hasn't been assigned to this patient yet.
              </Text>
              <Icon as={MdHourglassDisabled} boxSize={6} color='gray' />
              {/* <Button
                colorScheme='teal'
                variant='solid'
                size='lg'
                leftIcon={<BsPlusLg />}
              >
                Add a new set
              </Button> */}

              <HStack py={8}>
                {ExerciseToAdd.length > 0 && (
                  <Button
                    colorScheme='blue'
                    variant='solid'
                    size='sm'
                    leftIcon={<BsCheckLg />}
                  >
                    Assign to the patient
                  </Button>
                )}
                <ExerciseModal />
              </HStack>
            </VStack>
          )}
          {ExerciseToAdd.length > 0 && (
            <TableContainer
              borderRadius='lg'
              boxShadow='lg'
              px={2}
              py={2}
              bgColor='white'
            >
              <Table
                variant='striped'
                colorScheme='blue'
                bgColor='white'
                borderRadius='lg'
              >
                <Thead>
                  <Tr>
                    <Th>NO.</Th>
                    <Th>PICTURE</Th>
                    <Th>EXERCISE</Th>

                    <Th>TIME PERIOD ANS REPS</Th>
                    <Th>ACTION</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {ExerciseToAdd.map((item, index) => {
                    return (
                      <Tr>
                        <Td>{index + 1}.</Td>
                        <Td>
                          <Square
                            h='40px'
                            w='60px'
                            color='white'
                            borderRadius='lg'
                          >
                            <Image
                              src={
                                exercises.data.find(
                                  (obj) => obj._id === item.exercise
                                ).Steps[
                                  exercises.data.find(
                                    (obj) => obj._id === item.exercise
                                  ).Steps.length - 1
                                ].Image
                              }
                            />
                          </Square>
                        </Td>
                        <Td>
                          {
                            exercises.data.find(
                              (obj) => obj._id === item.exercise
                            ).Details.En_Description.Name
                          }
                        </Td>

                        <Td>
                          {item.TimePeriod} Second for each reps <br />{' '}
                          {item.Reps} reps
                        </Td>
                        <Td>
                          <HStack spacing='4'>
                            <Button
                              colorScheme='red'
                              variant='solid'
                              size='xs'
                              onClick={() => handleRemove(index)}
                            >
                              Delete
                            </Button>
                          </HStack>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              <VStack py={4}>
                <HStack py={8}>
                  {!TE && ExerciseToAdd.length > 0 && (
                    <Button
                      colorScheme='blue'
                      variant='solid'
                      size='sm'
                      leftIcon={submit ? <Spinner /> : <BsCheckLg />}
                      onClick={addExerciseToDB}
                    >
                      Assign to the patient
                    </Button>
                  )}
                  {TE && ExerciseToAdd !== TE.data.ExerciseSet && (
                    <Button
                      colorScheme='blue'
                      variant='solid'
                      size='sm'
                      leftIcon={submit ? <Spinner /> : <BsCheckLg />}
                      onClick={updateExerciseToDB}
                    >
                      Assign to the patient
                    </Button>
                  )}

                  <ExerciseModal />
                </HStack>
              </VStack>
            </TableContainer>
          )}
        </GridItem>
      )}
    </Grid>
  );
};

export default PTTherapeuticalExercise;
