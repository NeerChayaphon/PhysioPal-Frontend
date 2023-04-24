import React from 'react';
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
} from '@chakra-ui/react';
import PatientProfileMenu from '../../../component/PatientProfile/PatientProfileMenu';
import { useSelector } from 'react-redux';
import Loading from '../../../component/Loading/Loading';
import useGet from '../../../Hook/useGet';
import { useNavigate } from 'react-router-dom';

const PatientExerciseRecord = () => {
  const user = useSelector((state) => state.user.data);
  const language = useSelector((state) => state.language.value);

  const navigate = useNavigate();

  const {
    data: userState,
    error: error,
    loading: loading,
  } = useGet(
    `https://physiopal-api-production.up.railway.app/patient/${user.data._id}`
  );

  const {
    data: generalExercises,
    error: generalExercisesError,
    loading: generalExercisesLoading,
  } = useGet(
    `https://physiopal-api-production.up.railway.app/generalExercises`
  );

  const {
    data: therapeuticExercise,
    error: therapeuticExercisesError,
    loading: therapeuticExercisesLoading,
  } = useGet(
    `https://physiopal-api-production.up.railway.app/therapeuticExercises`
  );

  return (
    <Grid h='max' w='100%' templateColumns='2fr 10fr'>
      <GridItem bgColor='teal.100' w='100%'>
        <PatientProfileMenu />
      </GridItem>
      {userState === null ||
      generalExercises === null ||
      therapeuticExercise === null ? (
        <Loading />
      ) : (
        <GridItem w='100%' bgColor='gray.100' px={10} py={10}>
          <VStack>
            <Text fontSize='3xl' fontWeight='bold' mb={8}>
              {language === 'English'
                ? 'Exercise Record'
                : 'บันทึกการออกกำลังกาย'}
            </Text>
          </VStack>
          <TableContainer
            borderRadius='lg'
            boxShadow='lg'
            px={2}
            py={2}
            bgColor='white'
          >
            <Table
              variant='striped'
              colorScheme='teal'
              bgColor='white'
              borderRadius='lg'
            >
              <Thead>
                <Tr>
                  <Th>
                    {' '}
                    {language === 'English' ? 'NO.' : 'บันทึกการออกกำลังกาย'}
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
                  <Th> {language === 'English' ? 'TYPE' : 'ประเภท'} </Th>
                  <Th>
                    {' '}
                    {language === 'English'
                      ? 'PHYSIOTHERAPIST'
                      : 'นักกายภาพบำบัด'}{' '}
                  </Th>
                  <Th> {language === 'English' ? 'DATE' : 'วันที่'}</Th>
                  <Th> {language === 'English' ? 'STATUS' : 'สถานะ'}</Th>
                  <Th> {language === 'English' ? 'RECORD' : 'บันทึก'} </Th>
                </Tr>
              </Thead>
              <Tbody>
                {userState.data.ExerciseHistory.map((item, index) => {
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
                      <Td>
                        {item.Physiotherapist != undefined
                          ? item.Physiotherapist
                          : '-'}
                      </Td>
                      <Td>{new Date(item.Date).toISOString().substr(0, 10)}</Td>
                      <Td>{item.IsComplete ? 'Finished' : 'UnFinish'}</Td>
                      <Td>
                        <Button
                          colorScheme='teal'
                          variant='solid'
                          size='xs'
                          onClick={() =>
                            navigate(`/patient/profile/exercise/${index + 1}`, {
                              state: { exerciseSet: item },
                            })
                          }
                        >
                          {language === 'English'
                            ? 'View Detail'
                            : 'ดูเพิ่มเติม'}
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
      )}
    </Grid>
  );
};

export default PatientExerciseRecord;
