import React, { useState, useEffect } from 'react';
import {
  Grid,
  GridItem,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import PatientProfileMenu from '../../../component/PatientProfile/PatientProfileMenu';
import { useSelector } from 'react-redux';
import Loading from '../../../component/Loading/Loading';
import useGet from '../../../Hook/useGet';
import { useNavigate } from 'react-router-dom';
import useCheckUser from '../../../Hook/useCheckUser';
import { useCookie } from 'react-use';

const PatientExerciseRecord = () => {
  useCheckUser('patient', '/patient/login');
  const user = useSelector((state) => state.user.data);
  const language = useSelector((state) => state.language.value);
  const [userState, setUserState] = useState(null);
  const [token, updateToken, deleteToken] = useCookie('token');

  const [TE, setTE] = useState(null);
  console.log(TE);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(
        `https://physiopal-api-deploy-production.up.railway.app/patient/${user.data._id}`,
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
          setUserState(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });

      fetch(
        `https://physiopal-api-deploy-production.up.railway.app/appointments/therapeuticExercise/${user.data._id}`,
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
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [user]);

  const {
    data: generalExercises,
    error: generalExercisesError,
    loading: generalExercisesLoading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/generalExercises`
  );

  const {
    data: therapeuticExercise,
    error: therapeuticExercisesError,
    loading: therapeuticExercisesLoading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/therapeuticExercises`
  );

  const {
    data: PT,
    error: PTerror,
    loading: PTLoading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/physiotherapists`
  );

  // if (therapeuticExercise) {
  //   console.log(
  //     therapeuticExercise.data.find(
  //       (obj) => obj._id === userState.data.ExerciseHistory[1].ExerciseSetId
  //     ).Details.En_Description.Name
  //   );
  // }

  // if (generalExercises) {
  //   console.log(
  //     generalExercises.data.find(
  //       (obj) => obj._id === userState.data.ExerciseHistory[2].ExerciseSetId
  //     ).Details.En_Description.Name
  //   );
  // }

  console.log(userState);

  return (
    <Grid h='max' w='100%' templateColumns='2fr 10fr'>
      <GridItem bgColor='teal.100' w='100%'>
        <PatientProfileMenu />
      </GridItem>
      {userState !== null &&
      generalExercises !== null &&
      therapeuticExercise !== null &&
      TE !== null &&
      PT !== null ? (
        <GridItem w='100%' bgColor='gray.100' px={10} py={10}>
          {/* <VStack>
              <Text fontSize='3xl' fontWeight='bold' mb={8}>
                {language === 'English'
                  ? 'Exercise Record'
                  : 'บันทึกการออกกำลังกาย'}
              </Text>
            </VStack> */}
          <VStack mb={4}>
            {TE.data !== null && (
              <Alert status='info' borderRadius='lg'>
                <AlertIcon />
                <AlertTitle>
                  Your Physiotherapist has assigned you an exercise set.
                </AlertTitle>
                <AlertDescription>
                  Click on the "Assigned Exercises" tab and start exercise
                  session.
                </AlertDescription>
              </Alert>
            )}
          </VStack>
          <Tabs isFitted>
            <TabList mb='1em'>
              <Tab>
                <Text fontWeight='semibold' fontSize='xl'>
                  All Exercises
                </Text>{' '}
              </Tab>
              <Tab isDisabled={TE.data === null}>
                <Text fontWeight='semibold' fontSize='xl'>
                  Assigned Exercises
                </Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TableContainer
                  borderRadius='lg'
                  boxShadow='sm'
                  px={2}
                  py={2}
                  bgColor='white'
                >
                  <Table
                    variant='simple'
                    bgColor='white'
                    borderRadius='lg'
                    size='md'
                  >
                    <Thead>
                      <Tr>
                        <Th>
                          {' '}
                          {language === 'English'
                            ? 'NO.'
                            : 'บันทึกการออกกำลังกาย'}
                        </Th>
                        <Th>
                          {language === 'English' ? (
                            <>
                              EXERCISE <br /> SET
                            </>
                          ) : (
                            'เชตออกกำลังกาย'
                          )}
                        </Th>
                        <Th> {language === 'English' ? 'TYPE' : 'ประเภท'} </Th>
                        {/* <Th>
                      {' '}
                      {language === 'English'
                        ? 'PHYSIOTHERAPIST'
                        : 'นักกายภาพบำบัด'}{' '}
                    </Th> */}
                        <Th> {language === 'English' ? 'DATE' : 'วันที่'}</Th>
                        <Th> {language === 'English' ? 'STATUS' : 'สถานะ'}</Th>
                        <Th>
                          {' '}
                          {language === 'English' ? 'RECORD' : 'บันทึก'}{' '}
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {userState.data.ExerciseHistory ? (
                        userState.data.ExerciseHistory.slice()
                          .reverse()
                          .map((item, index) => {
                            return (
                              <Tr>
                                <Td>{index + 1}.</Td>
                                <Td>
                                  {item.ExerciseType === 'General'
                                    ? generalExercises.data.find(
                                        (obj) => obj._id === item.ExerciseSetId
                                      ).Details.En_Description.Name
                                    : therapeuticExercise.data.find(
                                        (obj) => obj._id === item.ExerciseSetId
                                      ).Details.En_Description.Name}
                                </Td>

                                <Td>
                                  {item.ExerciseType} <br />
                                  Exercise
                                </Td>
                                {/* <Td>
                            {item.Physiotherapist != null
                              ? item.Physiotherapist
                              : '-'}
                          </Td> */}
                                <Td>
                                  {new Date(item.Date)
                                    .toISOString()
                                    .substr(0, 10)}
                                </Td>
                                <Td>
                                  {item.ExerciseStatus
                                    ? item.ExerciseStatus.find(
                                        (i) => i.Status === 'skipped'
                                      )
                                      ? 'Incomplete'
                                      : 'Completed'
                                    : 'UnFinish'}
                                </Td>
                                <Td>
                                  <Button
                                    colorScheme='teal'
                                    variant='solid'
                                    size='xs'
                                    onClick={() =>
                                      navigate(
                                        `/patient/profile/exercise/${
                                          index + 1
                                        }`,
                                        {
                                          state: {
                                            exerciseSet: item,
                                            type: item.ExerciseType,
                                            status: item.ExerciseStatus
                                              ? item.ExerciseStatus
                                              : null,
                                          },
                                        }
                                      )
                                    }
                                  >
                                    {language === 'English'
                                      ? 'View Detail'
                                      : 'ดูเพิ่มเติม'}
                                  </Button>
                                </Td>
                              </Tr>
                            );
                          })
                      ) : (
                        <>No Data Found</>
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>
                <TableContainer
                  borderRadius='lg'
                  boxShadow='sm'
                  px={2}
                  py={2}
                  bgColor='white'
                >
                  <Table
                    variant='simple'
                    bgColor='white'
                    borderRadius='lg'
                    size='md'
                  >
                    <Thead>
                      <Tr>
                        <Th>
                          {' '}
                          {language === 'English'
                            ? 'NO.'
                            : 'บันทึกการออกกำลังกาย'}
                        </Th>
                        <Th>
                          {language === 'English' ? (
                            <>
                              EXERCISE <br /> SET
                            </>
                          ) : (
                            'เชตออกำลังกาย'
                          )}
                        </Th>

                        {/* <Th>
                      {' '}
                      {language === 'English'
                        ? 'PHYSIOTHERAPIST'
                        : 'นักกายภาพบำบัด'}{' '}
                    </Th> */}
                        <Th>
                          {' '}
                          {language === 'English'
                            ? 'START DATE'
                            : 'วันเริ่มต้น'}
                        </Th>
                        <Th>
                          {' '}
                          {language === 'English' ? 'END DATE' : 'วันสิ้นสุด'}
                        </Th>
                        <Th>
                          {' '}
                          {language === 'English'
                            ? 'PHYSIOTHERAPIST'
                            : 'นักกายภาพบำบัด'}
                        </Th>
                        <Th>
                          {' '}
                          {language === 'English' ? 'RECORD' : 'บันทึก'}{' '}
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {TE.data ? (
                        TE.data
                          .slice()
                          .reverse()
                          .map((item, index) => {
                            return (
                              <Tr>
                                <Td>{index + 1}.</Td>
                                <Td>
                                  {
                                    item.TherapeuticExercise.Details
                                      .En_Description.Name
                                  }
                                </Td>

                                <Td>
                                  {new Date(item.TherapeuticExercise.StartDate)
                                    .toISOString()
                                    .substr(0, 10)}
                                </Td>
                                <Td>
                                  {new Date(item.TherapeuticExercise.EndDate)
                                    .toISOString()
                                    .substr(0, 10)}
                                </Td>
                                <Td>
                                  {
                                    PT.data.find(
                                      (obj) =>
                                        obj._id ===
                                        item.Appointment.Physiotherapist
                                    ).Details.En_Description.Name
                                  }
                                </Td>
                                <Td>
                                  <Button
                                    colorScheme='teal'
                                    variant='solid'
                                    size='xs'
                                    onClick={() =>
                                      navigate(
                                        `/patient/therapeuticExercise/info/${item.TherapeuticExercise._id}`
                                      )
                                    }
                                  >
                                    {language === 'English'
                                      ? 'View Detail'
                                      : 'ดูเพิ่มเติม'}
                                  </Button>
                                </Td>
                              </Tr>
                            );
                          })
                      ) : (
                        <>No Data Found</>
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      ) : (
        <Loading />
      )}
    </Grid>
  );
};

export default PatientExerciseRecord;
