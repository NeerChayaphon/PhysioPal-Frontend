import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';
import React, { useRef, useState, useEffect } from 'react';
import '@tensorflow/tfjs-backend-webgl';
import Webcam from 'react-webcam';
import { count } from '../../utils/music';
import { POINTS, keypointConnections } from '../../utils/data';
import { drawPoint, drawSegment } from '../../utils/helper';
import { useStopwatch } from 'react-timer-hook';
import ExerciseSet from './exercise';
import debounce from 'lodash/debounce';

import {
  Flex,
  VStack,
  Grid,
  GridItem,
  Text,
  Image,
  Button,
  HStack,
  Progress,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';

let skeletonColor = 'rgb(255,255,255)';
let interval;
let flag = false;
let secondsRemaining = 5;

function Exercise() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [exerciseData, setExerciseDate] = useState(null);
  const [loading, setLoading] = useState(true);

  const [startingTime, setStartingTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [poseTime, setPoseTime] = useState(0);
  const [bestPerform, setBestPerform] = useState(0);
  // const [currentStep, setCurrentStep] = useState('LieDown');
  const [isStartPose, setIsStartPose] = useState(false);
  const [haveKeyPoint, setHaveKeyPoint] = useState(true);

  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(
    ExerciseSet.exerciseSet[0]
  );
  const [stepCount, setStepCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(
    currentExercise.exercise.steps[stepCount]
  );

  const [startingPosition, setStartingPosition] = useState(true);

  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isRest, setIsRest] = useState(false);
  const [restTime, setRestTime] = useState(5);

  const [round, setRound] = useState(1);

  const [isFinish, setIsFinish] = useState(false);
  const [audioPath, setAudioPath] = useState('');

  const [isShowCanva, setIsShowCanva] = useState(false);

  console.log(currentStep.details.th_description.audio);
  const countAudio = new Audio(audioPath);
  const roundAudio = new Audio(
    `https://d13nrtvuooncbe.cloudfront.net/round${round}-th.mp3`
  );
  const newAudio = new Audio(
    currentExercise.exercise.details.th_description.audio
  );
  const timerAudio = new Audio(
    `https://d13nrtvuooncbe.cloudfront.net/timer-th.mp3`
  );
  const restAudio = new Audio(
    'https://d13nrtvuooncbe.cloudfront.net/take-a-break-th.mp3'
  );
  const nextExerciseAudio = new Audio(
    'https://d13nrtvuooncbe.cloudfront.net/next-exercise-th.mp3'
  );

  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const delayTime = stepCount === 0 ? 1000 : 3000;

  // useEffect(() => {
  //   // const timeDiff = (currentTime - (startingTime - (bestPerform * 1000))) / 1000;
  //   // if (flag) {
  //   //   setPoseTime(timeDiff);
  //   // }
  //   // // } else {
  //   // //   setBestPerform(timeDiff);
  //   // // }
  //   // if (timeDiff > bestPerform) {
  //   //   setBestPerform(timeDiff);
  //   // }
  //   let demoTime = 0
  //   if (bestPerform != 0){
  //     demoTime = startingTime - (bestPerform * 1000)
  //   } else {
  //     demoTime = startingTime
  //   }

  //   const timeDiff = (currentTime - demoTime) / 1000;
  //   if (flag) {
  //       setPoseTime(timeDiff);
  //       if (timeDiff > bestPerform) {
  //           setBestPerform(timeDiff);
  //         }
  //   }
  // }, [currentTime]);

  // npm i react-timer-hook

  // useEffect(() => {
  //   setCurrentTime(0);
  //   setPoseTime(0);
  //   setBestPerform(0);
  // }, [currentStep]);

  // useEffect(() => {
  //   const timeDiff = (currentTime - startingTime) / 1000;
  //   if (flag) {
  //     setPoseTime(timeDiff);
  //   }
  //   if ((currentTime - startingTime) / 1000 > bestPerform) {
  //     setBestPerform(timeDiff);
  //   }
  // }, [currentTime]);

  function get_center_point(landmarks, left_bodypart, right_bodypart) {
    let left = tf.gather(landmarks, left_bodypart, 1);
    let right = tf.gather(landmarks, right_bodypart, 1);
    const center = tf.add(tf.mul(left, 0.5), tf.mul(right, 0.5));
    return center;
  }

  function get_pose_size(landmarks, torso_size_multiplier = 2.5) {
    let hips_center = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    let shoulders_center = get_center_point(
      landmarks,
      POINTS.LEFT_SHOULDER,
      POINTS.RIGHT_SHOULDER
    );
    let torso_size = tf.norm(tf.sub(shoulders_center, hips_center));
    let pose_center_new = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    pose_center_new = tf.expandDims(pose_center_new, 1);

    pose_center_new = tf.broadcastTo(pose_center_new, [1, 17, 2]);
    // return: shape(17,2)
    let d = tf.gather(tf.sub(landmarks, pose_center_new), 0, 0);
    let max_dist = tf.max(tf.norm(d, 'euclidean', 0));

    // normalize scale
    let pose_size = tf.maximum(
      tf.mul(torso_size, torso_size_multiplier),
      max_dist
    );
    return pose_size;
  }

  function normalize_pose_landmarks(landmarks) {
    let pose_center = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    pose_center = tf.expandDims(pose_center, 1);
    pose_center = tf.broadcastTo(pose_center, [1, 17, 2]);
    landmarks = tf.sub(landmarks, pose_center);

    let pose_size = get_pose_size(landmarks);
    landmarks = tf.div(landmarks, pose_size);
    return landmarks;
  }

  function landmarks_to_embedding(landmarks) {
    // normalize landmarks 2D
    landmarks = normalize_pose_landmarks(tf.expandDims(landmarks, 0));
    let embedding = tf.reshape(landmarks, [1, 34]);
    return embedding;
  }

  // const countAudio = new Audio(count);

  const runMovenet = async () => {
    console.log(currentStep);
    setAudioPath(
      currentExercise.exercise.steps[stepCount].details.th_description.audio
    );
    const detectorConfig = {
      modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER,
    };
    const detector = await poseDetection.createDetector(
      poseDetection.SupportedModels.MoveNet,
      detectorConfig
    );
    // const poseClassifier = await tf.loadLayersModel(
    //   "https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json"
    // );

    // ## Correct
    // const poseClassifier = await tf.loadLayersModel(
    //   "https://seniorprojectdemomodel.blob.core.windows.net/demomodel/demo.json"
    // );

    // ## Correct

    // const poseClassifier = await tf.loadLayersModel(steps[stepCount].model);
    const poseClassifier = await tf.loadLayersModel(
      currentExercise.exercise.steps[stepCount].model
    );
    // console.log(steps[stepCount].model);
    // console.log(steps[stepCount].name);

    // const poseClassifier = await tf.loadLayersModel(
    //   'https://seniorprojectdemomodel.blob.core.windows.net/startingdemo/startingmodel.json'
    // );

    // countAudio.loop = true;
    setIsShowCanva(false);
    const debouncePose = debounce((event) => {
      setIsShowCanva(true);
      interval = setInterval(() => {
        detectPose(detector, poseClassifier);
      }, delayTime);
    });
    debouncePose();
  };

  const detectPose = async (detector, poseClassifier) => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      let notDetected = 0;
      const video = webcamRef.current.video;
      const pose = await detector.estimatePoses(video);
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      try {
        const keypoints = pose[0].keypoints;
        let input = keypoints.map((keypoint) => {
          if (keypoint.score > 0.4) {
            if (
              !(
                keypoint.name === 'left_eye' || keypoint.name === 'right_eye'
              ) &&
              haveKeyPoint
            ) {
              drawPoint(ctx, keypoint.x, keypoint.y, 4, 'rgb(255,255,255)');
              let connections = keypointConnections[keypoint.name];
              try {
                connections.forEach((connection) => {
                  let conName = connection.toUpperCase();
                  drawSegment(
                    ctx,
                    [keypoint.x, keypoint.y],
                    [
                      keypoints[POINTS[conName]].x,
                      keypoints[POINTS[conName]].y,
                    ],
                    skeletonColor
                  );
                });
              } catch (err) {}
            }
          } else {
            notDetected += 1;
          }
          return [keypoint.x, keypoint.y];
        });
        if (notDetected > 4) {
          skeletonColor = 'rgb(255,255,255)';
          return;
        }

        const classifier = () => {
          const processedInput = landmarks_to_embedding(input);
          const classification = poseClassifier.predict(processedInput);
          classification.array().then((data) => {
            // const classNo = startingPosition
            //   ? StartingPositionClass[currentExercise.exercise.steps[stepCount].modelClass]
            //   : ExerciseClass[currentExercise.exercise.steps[stepCount].modelClass];
            const classNo =
              currentExercise.exercise.steps[stepCount].modelIndex;
            console.log(currentExercise.exercise.steps[stepCount].modelClass);

            console.log(data[0][classNo]);
            if (data[0][classNo] > currentExercise.exercise.accuracy) {
              if (currentExercise.exercise.steps[stepCount].timer === true) {
                if (!flag) {
                  // countAudio.play()
                  // setStartingTime((new Date(Date()).getTime()) - (bestPerform * 1000));
                  setIsCorrect(true);
                  flag = true;
                }
                setCurrentTime(new Date(Date()).getTime());
                skeletonColor = 'rgb(0,255,0)';
              } else {
                if (stepCount == 0) {
                  setStartingPosition(false);
                }
                setCurrentStep(currentExercise.exercise.steps[stepCount + 1]);
                clearInterval(interval);
                setStepCount(stepCount + 1);
              }
            } else {
              if (currentExercise.exercise.steps[stepCount].timer === true) {
                setIsCorrect(false);
                flag = false;
              }
              setIsSoundOn(false);
              skeletonColor = 'rgb(255,255,255)';
              // countAudio.pause();
              // countAudio.currentTime = 0;
            }
          });
        };
        classifier();
      } catch (err) {
        console.log(err);
      }
    }
  };

  function startExercise() {
    setIsStartPose(true);
    // runMovenet();
  }

  function nextCorrectPose() {
    flag = false;
    skeletonColor = 'rgb(255,255,255)';
    pause();
    clearInterval(interval);
    setIsCorrect(false);
    setCurrentTime(0);
    setPoseTime(0);
    setBestPerform(0);

    setCurrentStep(currentExercise.exercise.steps[stepCount + 1]);
    setStepCount(stepCount + 1);
  }

  function stopPose() {
    console.log('stop pose');
    flag = false;
    skeletonColor = 'rgb(255,255,255)';
    pause();
    clearInterval(interval);
    setIsCorrect(false);
    setIsStartPose(false);
    setStartingPosition(true);
    setCurrentTime(0);
    setPoseTime(0);
    setBestPerform(0);
    setStepCount(0);
    setCurrentStep(currentExercise.exercise.steps[0]);

    // countAudio.pause();
    // countAudio.currentTime = 0;

    if (round < currentExercise.reps) {
      setRound(round + 1);
      secondsRemaining = 5;
      setRestTime(5);
      setIsRest(true);
    } else {
      if (exerciseIndex < ExerciseSet.exerciseSet.length - 1) {
        setRound(1);
        setCurrentExercise(ExerciseSet.exerciseSet[exerciseIndex + 1]);
        setExerciseIndex(exerciseIndex + 1);
        nextExerciseAudio.play();
      } else {
        setIsFinish(true);
      }
    }
  }

  function skipPose() {
    console.log('skip pose');
    flag = false;
    skeletonColor = 'rgb(255,255,255)';
    pause();
    clearInterval(interval);
    setIsCorrect(false);
    setIsStartPose(false);
    setStartingPosition(true);
    setCurrentTime(0);
    setPoseTime(0);
    setBestPerform(0);
    setStepCount(0);
    // setCurrentStep(currentExercise.exercise.steps[0]);

    // countAudio.pause();
    // countAudio.currentTime = 0;

    if (exerciseIndex < ExerciseSet.exerciseSet.length - 1) {
      setRound(1);
      setExerciseIndex(exerciseIndex + 1);
    } else {
      setIsFinish(true);
    }

    // if (round < currentExercise.reps) {
    //   setRound(round + 1);
    //   secondsRemaining = 5;
    //   setRestTime(5);
    //   setIsRest(true);
    // } else {
    //   if (exerciseIndex < ExerciseSet.exerciseSet.length - 1) {
    //     setRound(1);
    //     setExerciseIndex(exerciseIndex + 1);
    //   } else {
    //     setIsFinish(true);
    //   }
    // }
  }

  const startNextExercise = () => {
    setCurrentExercise(ExerciseSet.exerciseSet[exerciseIndex]);
    setIsStartPose(true);
  };

  // const skipExercise = () => {
  //   setRound(currentExercise.reps);
  //   stopPose();
  //   setExerciseIndex(exerciseIndex + 1);
  // };

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    fetch('https://physiopal-api-production.up.railway.app/user/GetUserByJWT', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handlePlayClick = async () => {
      newAudio.addEventListener('ended', handlePlayClick2);
      newAudio.play();
      await new Promise((resolve) => {
        const checkAudioEnded = setInterval(() => {
          if (newAudio.ended) {
            clearInterval(checkAudioEnded);
            resolve();
          }
        }, 100);
      });
    };

    const handlePlayClick2 = async () => {
      newAudio.removeEventListener('ended', handlePlayClick2);
      roundAudio.addEventListener('ended', handleAudioEnded);
      roundAudio.play();
      await new Promise((resolve) => {
        const checkAudioEnded = setInterval(() => {
          if (roundAudio.ended) {
            clearInterval(checkAudioEnded);
            resolve();
          }
        }, 100);
      });
    };

    const handleAudioEnded = () => {
      console.log('Audio ended, now do the next operation');
      roundAudio.removeEventListener('ended', handleAudioEnded);
      runMovenet();
    };

    if (isStartPose) {
      reset();
      pause();
      if (stepCount === 0) {
        handlePlayClick().catch(console.error);
      } else {
        runMovenet();
      }
    }
  }, [stepCount, isStartPose]);

  useEffect(() => {
    if (
      currentExercise.exercise.steps[stepCount].timer === true &&
      seconds === 0
    ) {
      const handlePlayClick = async () => {
        countAudio.addEventListener('ended', handleAudioEnded);
        countAudio.play();
        await new Promise((resolve) => {
          const checkAudioEnded = setInterval(() => {
            if (countAudio.ended) {
              clearInterval(checkAudioEnded);
              resolve();
            }
          }, 0);
        });
      };

      const handleAudioEnded = () => {
        countAudio.removeEventListener('ended', handleAudioEnded);
        timerAudio.play();
      };

      handlePlayClick().catch(console.error);
    } else {
      countAudio.play();
    }
  }, [audioPath, setAudioPath]);

  console.log(stepCount === currentExercise.exercise.steps.length - 1);
  useEffect(() => {
    if (seconds > currentExercise.timePeriod) {
      if (stepCount === currentExercise.exercise.steps.length - 1) {
        stopPose();
      } else {
        setCurrentStep(currentExercise.exercise.steps[stepCount + 1]);
        clearInterval(interval);
        setStepCount(stepCount + 1);
      }
    } else {
      setAudioPath(`https://d13nrtvuooncbe.cloudfront.net/${seconds}-th.mp3`);
    }
  }, [seconds]);

  // useEffect(() => {
  //   if (round > currentExercise.reps) {
  //     stopPose();
  //   }
  // }, [round]);

  useEffect(() => {
    // if (stepCount === currentExercise.exercise.steps.length - 1) {
    //   isCorrect ? start() : pause();
    // }
    if (currentExercise.exercise.steps[stepCount].timer === true) {
      isCorrect ? start() : pause();
    }
  }, [isCorrect]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsRest(false)
  //     setIsStartPose(true);
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, [isRest, setIsRest]);

  useEffect(() => {
    if (isRest) {
      const playRestAudio = debounce((event) => {
        restAudio.play();
      }, 500);

      playRestAudio();
      const restInterval = setInterval(() => {
        // time is up
        if (secondsRemaining === 0) {
          setIsRest(false);
          setIsStartPose(true);
          clearInterval(restInterval);
        }
        secondsRemaining--;
        setRestTime(secondsRemaining);
      }, 1000);
    }
  }, [isRest, setIsRest]);

  return (
    <>
      <Flex palignItems='flex-start' flexDir='column' m={8}>
        <Text textColor='black' fontWeight='bold' fontSize='xl' mb={4}>
          {currentExercise.exercise.details.th_description.name}
        </Text>
        <VStack
          w='full'
          borderTopRadius='md'
          alignItems='flex-start'
          bg='gray.50'
          p={4}
        >
          {/* <Text mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
            convallis venenatis nam dignissim tortor integer imperdiet dignissim
            ac. Urna aenean cras eget orci, augue nisl nunc, vitae odio. Tellus
            tincidunt facilisi dui nisi, volutp
          </Text> */}
          <Grid
            w='100%'
            templateColumns={`repeat(${currentExercise.exercise.steps.length}, 1fr)`}
            gap={6}
          >
            {currentExercise.exercise.steps.map((step) => (
              <GridItem w='100%'>
                <Flex
                  flexDir='column'
                  alignItems='start'
                  borderTop='4px'
                  borderTopColor={
                    currentStep.details === step.details && isStartPose
                      ? 'blue.500'
                      : 'gray.400'
                  }
                >
                  <Text
                    fontSize='sm'
                    fontWeight='semibold'
                    color={
                      currentStep.details === step.details && isStartPose
                        ? 'blue.500'
                        : 'gray.500'
                    }
                    pt={3}
                  >
                    ขั้นตอนที่{' '}
                    {currentExercise.exercise.steps.indexOf(step) + 1}
                  </Text>
                  <Text
                    color={
                      currentStep.details === step.details && isStartPose
                        ? 'blue.500'
                        : 'gray.500'
                    }
                    fontSize='sm'
                  >
                    {step.details.th_description.name}
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </VStack>
        {/* <HStack w='full' alignItems='flex-start' bg='blue.50'>
  
        </HStack> */}
        {isFinish && (
          <Grid w='100%' templateColumns='12fr' h='xl'>
            <GridItem
              w='100%'
              bgColor='gray.100'
              justifyContent='center'
              display='flex'
              alignItems='center'
            >
              <Text fontSize='2xl' fontWeight='bold' mb={5}>
                Finish
              </Text>
            </GridItem>
          </Grid>
        )}
        {!isFinish && (
          <Grid w='100%' templateColumns='5fr 7fr' h='xl'>
            <GridItem
              w='100%'
              bgColor='gray.100'
              justifyContent='center'
              display='flex'
              alignItems='center'
            >
              <VStack gap={2}>
                <Image
                  boxSize='md'
                  objectFit='cover'
                  src={currentExercise.exercise.steps[stepCount].image}
                  alt='Dan Abramov'
                />

                {isStartPose && (
                  <VStack
                    bgColor='white'
                    px={4}
                    borderRadius='lg'
                    boxShadow='lg'
                    py={2}
                  >
                    {isStartPose ? (
                      <Text color='gray.700' fontSize='2xl'>
                        รอบที่ {round}
                      </Text>
                    ) : (
                      <Text color='gray.100'>----</Text>
                    )}
                    //
                    {currentStep.timer === true && seconds !== 0 && (
                      <Text color='gray.700' fontSize='2xl'>
                        จับเวลา: {seconds} วินาที
                      </Text>
                    )}
                  </VStack>
                )}
              </VStack>
              {/* <VStack>
                <Image
                  boxSize='md'
                  objectFit='cover'
                  src={currentExercise.exercise.steps[stepCount].image}
                  alt='Dan Abramov'
                />
                {isStartPose ? (
                  <Text fontSize='3xl'>รอบที่ {round}</Text>
                ) : (
                  <Text color='gray.100'>----</Text>
                )}
                //
                {currentStep.timer === true ? (
                  <Text fontSize='3xl'>จับเวลา: {seconds} วินาที</Text>
                ) : (
                  <Text color='gray.100'>----</Text>
                )}
              </VStack> */}
            </GridItem>
            <GridItem
              w='100%'
              bgColor='gray.200'
              justifyContent='center'
              display='flex'
              flexDir='column'
              alignItems='center'
            >
              {/* {!isStartPose && !isRest && exerciseIndex === 0 && (
                <Text fontSize='2xl' fontWeight='bold' mb={5}>
                  Let's start exercise
                </Text>
              )}
              {!isStartPose && !isRest && exerciseIndex > 0 && (
                <Text fontSize='2xl' fontWeight='bold' mb={5}>
                  Next exercise
                </Text>
              )}
              {isRest && (
                <Text fontSize='2xl' fontWeight='bold' mb={5}>
                  Let's take a break
                </Text>
              )} */}
              {!isStartPose && !isRest && exerciseIndex === 0 && (
                <Text fontSize='2xl' fontWeight='bold' mb={5}>
                  เริ่มต้นออกกำลังกาย
                </Text>
              )}
              {!isStartPose && !isRest && exerciseIndex > 0 && (
                <Text fontSize='2xl' fontWeight='bold' mb={5}>
                  ท่าออกกำลังกายถัดไป
                </Text>
              )}
              {isRest && (
                <Text fontSize='2xl' fontWeight='bold' mb={5}>
                  พัก 5 วินาที
                </Text>
              )}
              {isRest && (
                <Text fontSize='2xl' fontWeight='bold' mb={5}>
                  {restTime}
                </Text>
              )}
              {/* {!isStartPose && !isRest && exerciseIndex === 0 && (
                <Button
                  color='white'
                  bgColor='teal.400'
                  leftIcon={<FaPlay />}
                  onClick={startExercise}
                  _hover='teal.100'
                >
                  {' '}
                  Start
                </Button>
              )} */}
              {!isStartPose && !isRest && (
                <Button
                  color='white'
                  bgColor='teal.400'
                  leftIcon={<FaPlay />}
                  onClick={startExercise}
                  _hover='teal.100'
                >
                  {' '}
                  <Text fontSize='xl'>เริ่ม</Text>
                </Button>
              )}
              {/* {!isStartPose && !isRest && exerciseIndex > 0 && (
                <Button
                  color='white'
                  bgColor='teal.400'
                  leftIcon={<FaPlay />}
                  onClick={startNextExercise}
                  _hover='teal.100'
                >
                  {' '}
                  Start
                </Button>
              )} */}
              {/* {!isStartPose && !isRest && exerciseIndex > 0 && (
                <Button
                  color='white'
                  bgColor='teal.400'
                  leftIcon={<FaPlay />}
                  onClick={startNextExercise}
                  _hover='teal.100'
                >
                  {' '}
                  เริ่ม
                </Button>
              )} */}

              {isStartPose && !isRest && (
                <Webcam
                  width='640px'
                  height='480px'
                  id='webcam'
                  ref={webcamRef}
                  style={{
                    position: 'absolute',
                    padding: '0px',
                  }}
                />
              )}
              {isStartPose && !isRest && isShowCanva && (
                <canvas
                  ref={canvasRef}
                  id='my-canvas'
                  width='640px'
                  height='480px'
                  style={{
                    position: 'absolute',
                    zIndex: 1,
                  }}
                ></canvas>
              )}
            </GridItem>
          </Grid>
        )}
        {isStartPose && (
          <Flex w='full' justifyContent='center' mt={4} c>
            <Button
              color='white'
              bgColor='teal.400'
              _hover='teal.100'
              onClick={skipPose}
            >
              ข้ามท่าออกกำลังกายนี้
            </Button>
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default Exercise;
