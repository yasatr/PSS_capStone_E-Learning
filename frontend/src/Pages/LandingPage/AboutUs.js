import React from 'react'
import { Flex, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaUserGraduate, FaHandshake, FaStar } from 'react-icons/fa';

const AboutUs = () => {
    const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
    const array = [
        {
          id: 1,
          text: 'Certifications provided after meritorious completion of your courses',
          icon: FaUserGraduate,
        },
        {
          id: 2,
          text: 'We collaborate with you, for your better future',
          icon: FaHandshake,
        },
        {
          id: 3,
          text: 'Five star service with Expert instructors and their priceless study material',
          icon: FaStar,
        },
      ];
  return (
    <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThanMD ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThanMD ? 'row' : 'column'}
    >
      {array.map((arr) => (
        <>
          <Flex
            height="300px"
            bg="blackAlpha.200"
            width={isLargerThanMD ? '32%' : 'full'}
            shadow="md"
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThanMD ? '0' : '4'}
            border="1px solid #C4DDFF"
          >
            <Icon as={arr.icon} boxSize={14} color="blue.600" mb="5" />
            <Text>{arr.text}</Text>
          </Flex>

          <Spacer />
        </>
      ))}
    </Flex>
    
  )
}

export default AboutUs