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
  Heading,
  HStack,
  WrapItem,
  Avatar,
  Card,
  CardBody,
  Stack,
  Badge,
} from '@chakra-ui/react';
import Picture from '../../../icons/Exercise/Picture2.png';
import Exercise1 from '../../../icons/Exercise/Exercise1.png';
import { useLocation } from 'react-router-dom';
import Loading from '../../../component/Loading/Loading';
import useGet from '../../../Hook/useGet';
import { useSelector } from 'react-redux';
import useCheckUser from '../../../Hook/useCheckUser';

const PatientVideoRecord = () => {
  useCheckUser('patient', '/patient/login');
  const location = useLocation();
  const {
    data: exerciseData,
    error,
    loading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/generalExercise/join/${location.state.exerciseSet.ExerciseSetId}`
  );

  const {
    data: TE,
    error: TEerror,
    loading: TEloading,
  } = useGet(
    `https://physiopal-api-deploy-production.up.railway.app/therapeuticExercise/join/${location.state.exerciseSet.ExerciseSetId}`
  );

  const language = useSelector((state) => state.language.value);

  const exerciseSetData = location.state.type === 'General' ? exerciseData : TE;

  if (
    location.state === undefined ||
    loading === true ||
    TEloading ||
    exerciseSetData === null
  ) {
    return <Loading />;
  }

  console.log(exerciseSetData);

  return (
    <Grid h='max' w='100%'>
      <Heading size='lg' px={10} mt={8}>
        {exerciseSetData != null && language === 'English'
          ? exerciseSetData.data.Details.En_Description.Name
          : exerciseSetData.data.Details.Th_Description.Name}
      </Heading>
      <Grid px={10} py={8}>
        <Image src={Picture} borderTopRadius='lg' w='100%' />
        {/* <Image
          src={
            exerciseData.data.ExerciseSet[0].exercise.Steps[
              exerciseData.data.ExerciseSet[0].exercise.Steps.length - 1
            ].Image
          }
          borderTopRadius='lg'
          w='40%'
        /> */}
        <Flex
          flexDir='column'
          bgColor='gray.100'
          px={10}
          py={8}
          borderBottomRadius='lg'
          boxShadow='lg'
        >
          {/* <Heading size='lg' mt={8} mb={5}>
            Physiotherapist
          </Heading> */}

          {/* <HStack>
            <WrapItem>
              <Avatar
                size='xl'
                name='Dan Abrahmov'
                src='https://bit.ly/dan-abramov'
              />
            </WrapItem>
            <VStack alignItems='start' pl={4}>
              <Heading size='md'>DR. KAMADO TANJIRO</Heading>
              <Text fontSize='20px'>Physioterapist, arm</Text>
            </VStack>
          </HStack> */}

          <Flex flexDir='column'>
            <Heading size='lg' mt={8} mb={5}>
              {exerciseSetData != null && language === 'English'
                ? 'Exercise'
                : 'ท่าออกกำลังกาย'}
            </Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              {exerciseSetData.data.ExerciseSet.map((item, index) => {
                return (
                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    boxShadow='lg'
                    w='max'
                  >
                    <Image
                      objectFit='cover'
                      maxW={{ base: '80%', sm: '150px' }}
                      src={
                        item.exercise.Steps[item.exercise.Steps.length - 1]
                          .Image
                      }
                      mx={2}
                    />
                    <Stack>
                      <CardBody boxSize='md'>
                        <Heading size='md'>
                          {exerciseSetData != null && language === 'English'
                            ? item.exercise.Details.En_Description.Name
                            : item.exercise.Details.Th_Description.Name}
                        </Heading>
                        <Badge colorScheme='blue' mr={2}>
                          {language === 'English'
                            ? `Time: ${item.TimePeriod} Seconds`
                            : `เวลา: ${item.TimePeriod} วินาที`}
                        </Badge>
                        <Badge colorScheme='green'>
                          {' '}
                          {language === 'English'
                            ? `Reps: ${item.Reps}`
                            : `จำนวนรอบ: ${item.Reps}`}
                        </Badge>
                        <Text py='2'>
                          {exerciseData != null && language === 'English'
                            ? item.exercise.Details.En_Description.Description
                            : item.exercise.Details.Th_Description.Description}
                        </Text>

                        {location.state.status && (
                          <Badge
                            colorScheme={
                              location.state.status[index].Status === 'skipped'
                                ? 'red'
                                : 'blue'
                            }
                            mr={2}
                          >
                            Status: {location.state.status[index].Status}
                          </Badge>
                        )}
                      </CardBody>
                    </Stack>
                  </Card>
                );
              })}
            </Grid>
          </Flex>
        </Flex>
      </Grid>
    </Grid>
  );
};

export default PatientVideoRecord;
