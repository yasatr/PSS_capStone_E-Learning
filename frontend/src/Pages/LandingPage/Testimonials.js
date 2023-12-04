import React from 'react'
import {
    Flex,
    Spacer,
    Text,
    Wrap,
    WrapItem,
    Avatar,
    Box,
    useMediaQuery,
  } from '@chakra-ui/react';

const Testimonials = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <Flex
        maxWidth={isLargerThanLG ? '1400px' : 'full'}
        minHeight="70vh"
        justifyContent="center"
        alignItems="center"
        py="16"
        px={isLargerThanLG ? '16' : '6'}
        mx="auto"
        flexDirection={isLargerThanLG ? 'row' : 'column'}
      >
        <Flex
          width={isLargerThanLG ? '380px' : 'full'}
          shadow="md"
          minHeight="250px"
          flexDirection="column"
          p="8"
          m="4"
          border="1px solid #C4DDFF"
          borderRadius="md"
          justifyContent="center"
        >
          <Text mb="5">
            "I've never enjoyed learning as much as I do with CapStone! The courses are engaging,
            the instructors are knowledgeable. It's a game-changer for anyone looking to expand their knowledge effortlessly."
          </Text>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Karl Brighton"
                src="https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg"
              />
            </WrapItem>
  
            <WrapItem>
              <Box>
                <Text fontSize="sm">Karl Brighton</Text>
                <Text fontSize="sm" opacity="0.7">
                  Fresher from MIT
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Flex>
  
        <Spacer />
        <Flex
          width={isLargerThanLG ? '380px' : 'full'}
          shadow="md"
          minHeight="250px"
          flexDirection="column"
          p="8"
          m="4"
          border="1px solid #C4DDFF"
          borderRadius="md"
          justifyContent="center"
        >
          <Text mb="5">
            "As a busy professional, the flexibility of this app is a game-changer. I can access top-notch courses from
            anywhere, and the bite-sized lessons fit perfectly into my schedule."
          </Text>
  
          <Wrap>
            <WrapItem>
              <Avatar
                name="Karl Brighton"
                src="https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg"
              />
            </WrapItem>
  
            <WrapItem>
              <Box>
                <Text fontSize="sm">Krishna Bells</Text>
                <Text fontSize="sm" opacity="0.7">
                  Product Manager at Google
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Flex>
        <Spacer />
  
        <Flex
          width={isLargerThanLG ? '380px' : 'full'}
          shadow="md"
          minHeight="250px"
          flexDirection="column"
          p="8"
          m="4"
          border="1px solid #C4DDFF"
          borderRadius="md"
          justifyContent="center"
        >
          <Text mb="5">
            "This app turned my curiosity into a passion for learning. The variety of courses allowed me to explore new subjects.
            I highly recommend it to anyone seeking a modern and effective approach to education."
          </Text>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Ben Spiff"
                src="https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg"
              />
            </WrapItem>
  
            <WrapItem>
              <Box>
                <Text fontSize="sm">Ben Spiff</Text>
                <Text fontSize="sm" opacity="0.7">
                  Team Lead at Protiviti
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
  )
}

export default Testimonials