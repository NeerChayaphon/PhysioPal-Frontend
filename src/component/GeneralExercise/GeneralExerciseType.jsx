import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Image,
  Grid,
  useDisclosure,
  useColorModeValue,
  Heading,
  Menu,
  MenuButton,
  VStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Back from '../../icons/MuscleType/Back.png';
import Knee from '../../icons/MuscleType/Knee.png';
import Shoulder from '../../icons/MuscleType/Shoulder.png';
import Neck from '../../icons/MuscleType/Neck.png';
import Elbow from '../../icons/MuscleType/Elbow.png';
import Hip from '../../icons/MuscleType/Hip.png';
import AchillesTendon from '../../icons/MuscleType/AchillesTendon.png';
import Ankle from '../../icons/MuscleType/Ankle.png';
import HeelOrFootSole from '../../icons/MuscleType/HeelOrFootSole.png';

const GeneralExerciseType = ({ type }) => {
  const language = useSelector((state) => state.language.value);
  const navigate = useNavigate();

  return (
    <Grid px={10} py={8} templateColumns='repeat(4, 1fr)' gap={10}>
      <Menu>
        {type.map((item, index) => {
          return (
            <MenuButton
              variant='ghost'
              mx={1}
              px={8}
              borderRadius={5}
              bgColor='gray.200'
              _hover={{ bg: 'gray.400' }}
              aria-label='Courses'
              fontWeight='normal'
              w='max'
              boxShadow='lg'
              //  onMouseEnter={onOpen}
              //  onMouseLeave={onClose}
              onClick={() =>
                navigate(`/patient/generalExercise/type/${index + 1}`)
              }
            >
              <VStack py={5} spacing='6'>
                <Image
                  src={item.Image}
                  borderRadius='lg'
                  mt={5}
                  boxSize='220px'
                />
                <Heading size='md' align='center'>
                  {language === 'English'
                    ? item.Type.En_Description.Name
                    : item.Type.Th_Description.Name}
                </Heading>
              </VStack>
            </MenuButton>
          );
        })}
      </Menu>
    </Grid>
  );
};

export default GeneralExerciseType;
