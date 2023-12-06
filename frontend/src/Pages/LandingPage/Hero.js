import React from 'react'
import {
    Box,
    Button,
    Flex,
    Img,
    Spacer,
    Text,
    useMediaQuery,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import img from '../../Assets/image1.webp';


const Hero = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const navigate = useNavigate();
  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThanLG ? '16' : '6'}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      <Box mr={isLargerThanLG ? '6' : '0'} w={isLargerThanLG ? '60%' : 'full'}>
        <Text
          fontSize={isLargerThanLG ? '5xl' : '4xl'}
          fontWeight="bold"
          mb="4"
        >
          {' '}
          Come and Learn with us!
        </Text>

        <Text mb="6" fontSize={isLargerThanLG ? 'lg' : 'base'} opacity={0.7}>
          Welcome to our learning app - your gateway to a world of knowledge!
          Explore interactive courses, engage with expert instructors, and unlock your full learning potential.
          Join our vibrant community and embark on a journey of discovery. Start your learning adventure today!
        </Text>

        <Button
          w="200px"
          colorScheme="blue"
          variant="solid"
          h="50px"
          size={isLargerThanLG ? 'lg' : 'md'}
          mb={isLargerThanLG ? '0' : '10'}
          onClick={(e) => {
            navigate('/signup');
            }}
        >
          Sign Up
        </Button>
      </Box>
      <Spacer />
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        alignItems="center"
        justifyContent="center"
      >
        <Img src={img} alt="image" />
      </Flex>
    </Flex>
  )
}

export default Hero