import React from 'react'
import {
    Flex,
    Spacer,
    Image,
    Text,
    Button,
    useMediaQuery,
  } from '@chakra-ui/react';
import image from '../../Assets/Eleraning.jpg'
import { Link } from 'react-scroll';



const Services = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <Flex
    width="full"
    minHeight="70vh"
    alignItems="center"
    px={isLargerThanLG ? '16' : '6'}
    py="16"
    justifyContent="center"
    flexDirection={isLargerThanLG ? 'row' : 'column'}
  >
    <Flex
      w={isLargerThanLG ? '40%' : 'full'}
      mb={isLargerThanLG ? '0' : '6'}
      alignItems="center"
      justifyContent="center"
    >
      <Image src={image} alt="image" w="full" />
    </Flex>
    <Spacer />
    <Flex
      w={isLargerThanLG ? '60%' : 'full'}
      flexDirection="column"
      ml={isLargerThanLG ? '7' : '0'}
    >
      <Text fontSize={isLargerThanLG ? '5xl' : '4xl'} fontWeight="bold">
        Upskill, and find your first job.
      </Text>

      <Text mb="6" opacity="0.8">
        Immerse yourself in a dynamic learning experience with our app. From personalized courses
        tailored to your goals to live sessions with industry experts, we provide a comprehensive
        platform that adapts to your pace. Explore a vast library of resources, interactive quizzes,
        and collaborative forums, ensuring an engaging and effective learning journey for every user.
      </Text>

      <Link to='contactUs' spy={true} smooth={true}>
      <Button width="200px" size="lg" colorScheme="blue">
        CONTACT US
      </Button>
      </Link>
    </Flex>
  </Flex>
  )
}

export default Services