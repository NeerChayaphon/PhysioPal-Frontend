import React from 'react';
import {
  Image,
  Text,
  Stack,
  Heading,
  Grid,
  useDisclosure,
  Menu,
  MenuButton,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const TelemedicineDoctorCard = ({ doctorId, allPhy }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const filteredArray =
    doctorId.length > 0
      ? allPhy.filter((obj) => doctorId.some((id) => obj._id === id))
      : [];
  const language = useSelector((state) => state.language.value);
  const navigate = useNavigate();

  console.log(filteredArray);
  return (
    <Grid px={10} py={10} templateColumns='repeat(5, 1fr)' gap={6}>
      {/* <Flex>
                <Card bgColor='teal.100'>
                    <CardBody>
                        <Image
                        src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize='210px'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='sm' align='center'>DR. KAMADO TANJIRO</Heading>
                            <Text align='center'>Physioterapist, Arm</Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Flex> */}
      <Menu isOpen={isOpen}>
        {/* {doctorId.map((item, index) => {
        return (
        <MenuButton
      variant='ghost'
      //  px={4}
      borderRadius='lg'
      bgColor='teal.100'
      _hover={{ bg: useColorModeValue('teal.300', 'teal.500') }}
      aria-label='Courses'
      fontWeight='normal'
      w='max'
      boxShadow='md'
      //  onMouseEnter={onOpen}
      //  onMouseLeave={onClose}
    >
      <VStack mb={4}>
        <Image
          src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
          borderTopRadius='lg'
          boxSize='240px'
        />
        <Stack>
          <Heading size='sm' align='center' mt={2}>
            DR. KAMADO TANJIRO
          </Heading>
          <Text align='center'>Physioterapist, Arm</Text>
        </Stack>
      </VStack>
    </MenuButton>
      } */}

        {filteredArray.map((item, index) => {
          return (
            <MenuButton
              variant='ghost'
              //  px={4}
              borderRadius='lg'
              bgColor='teal.100'
              _hover={{ bg: 'teal.300' }}
              aria-label='Courses'
              fontWeight='normal'
              w='max'
              boxShadow='md'
              //  onMouseEnter={onOpen}
              //  onMouseLeave={onClose}
              onClick={() => navigate(`/patient/telemedicine/${item._id}`)}
            >
              <VStack mb={4}>
                <Image
                  src='https://img.freepik.com/free-vector/hand-drawn-doctor-answer-questions-clipart-gesture-character_40876-3115.jpg?w=1380&t=st=1677661140~exp=1677661740~hmac=5fe43c19dc5f4b8dca7b6b8b26c8840c44f5197a4d7ede3bdb0e5cda74597eeb'
                  borderTopRadius='lg'
                  boxSize='240px'
                />
                <Stack>
                  <Heading size='sm' align='center' mt={2}>
                    {language === 'English'
                      ? item.Details.En_Description.Name
                      : item.Details.Th_Description.Name}
                  </Heading>
                  <Text align='center'>Physioterapist, Arm</Text>
                </Stack>
              </VStack>
            </MenuButton>
          );
        })}
      </Menu>
    </Grid>
  );
};

export default TelemedicineDoctorCard;
