import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Main = () => {
  return (
    <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
      <Flex alignItems={'center '} justifyContent={'space-between'} mt={'12'}>
        <Heading
          color={'blue.400'}
          display={['none', 'block', 'block', 'block', 'block']}
        >
          Expense Tracker
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Main;
