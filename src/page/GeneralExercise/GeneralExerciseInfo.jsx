import React, { useEffect, useState } from 'react';
import {
  Heading,
  Grid,
  Image,
  Flex,
  Text,
  Card,
  CardBody,
  Stack,
  Button,
  WrapItem,
  Avatar,
  HStack,
  VStack,
  Badge,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Picture from '../../icons/Exercise/Picture2.png';
import Exercise1 from '../../icons/Exercise/Exercise1.png';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import useGet from '../../Hook/useGet';
import Loading from '../../component/Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import useCheckUser from '../../Hook/useCheckUser';
import { useCookie } from 'react-use';
import { removeExerciseStatus } from '../../slice/exerciseSet/exerciseStatusSlice';

const GeneralExerciseInfo = () => {
  const { id } = useParams();
  const language = useSelector((state) => state.language.value);
  const [exerciseData, setExerciseData] = useState(null);
  const [loadingEx, setLoadingEx] = useState(true);
  const [token, updateToken, deleteToken] = useCookie('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  dispatch(removeExerciseStatus());

  useCheckUser('patient', '/patient/login');
  const { data, error, loading } = useGet(
    'https://physiopal-api-deploy-production.up.railway.app/generalExercises'
  );

  useEffect(() => {
    if (data != null) {
      fetch(
        `https://physiopal-api-deploy-production.up.railway.app/generalExercise/join/${
          data.data[id - 1]._id
        }`,
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
          setExerciseData(data);
          setLoadingEx(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoadingEx(false);
        });
    }
  }, [data]);

  console.log(exerciseData);

  if (loading || loadingEx) {
    return <Loading />;
  } else {
    return (
      <Grid h='max' w='100%'>
        <Heading size='lg' px={10} mt={8}>
          {exerciseData != null && language === 'English'
            ? exerciseData.data.Details.En_Description.Name
            : exerciseData.data.Details.Th_Description.Name}
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
                {exerciseData != null && language === 'English'
                  ? 'Exercise'
                  : 'ท่าออกกำลังกาย'}
              </Heading>
              <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                {exerciseData.data.ExerciseSet.map((item, index) => {
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
                            {exerciseData != null && language === 'English'
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
                              : item.exercise.Details.Th_Description
                                  .Description}
                          </Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  );
                })}
              </Grid>
            </Flex>
            <Flex flexDir='row' justifyContent='center'>
              <Button
                colorScheme='teal'
                variant='solid'
                mt={10}
                size='lg'
                height='60px'
                width='300px'
                mb={5}
                leftIcon={<MdOutlineNavigateNext />}
                onClick={() => navigate(`/patient/generalExercise/set/${id}`)}
              >
                {exerciseData != null && language === 'English'
                  ? 'Start from begining'
                  : 'เริ่มออกกำลังกาย'}
              </Button>
            </Flex>
          </Flex>
        </Grid>
      </Grid>
    );
  }
};

export default GeneralExerciseInfo;
