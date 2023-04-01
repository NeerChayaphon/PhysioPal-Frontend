import React from 'react';
import { Spinner, Flex } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Flex align='center' justify='center' height='100vh'>
      <Spinner size='xl' color='blue.500' />
    </Flex>
  );
};

export default Loading;
