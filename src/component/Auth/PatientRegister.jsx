import React from 'react';
import { Grid, GridItem, Text, Flex, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const PatientRegister = () => {
  const language = useSelector((state) => state.language.value);
  return (
    <>
      <Grid w='100%' templateColumns='5fr 7fr' h='90vh' px={8} py={10}>
        <GridItem
          w='100%'
          bgColor='teal.200'
          justifyContent='center'
          display='flex'
          alignItems='center'
        >
          {/* <Flex flexDir='column' w='100%' alignItems='center'>
            <Text fontWeight='bold' fontSize='5xl' color='red.500'>
              Hello
            </Text>
            <Text>Neer</Text>
          </Flex>
          <Input bgColor='white'></Input> */}
        </GridItem>

        <GridItem
          w='100%'
          bgColor='gray.100'
          justifyContent='center'
          display='flex'
          alignItems='center'
        ></GridItem>
      </Grid>
    </>
  );
};

export default PatientRegister;
