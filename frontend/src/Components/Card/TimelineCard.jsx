import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

const TimelineCard = ({ contentDesc, contentType, modifiedAt, course }) => {
  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "#2d3748")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: "15px 15px 15px 0",
        position: "absolute",
        left: "-15px",
        display: "block",
      }}
    >
      {/* <Icon as={} w={12} h={12} color="teal.400" /> */}
      <Box>
        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            as={Link}
            _hover={{ color: "teal.400" }}
            fontSize="2xl"
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {contentDesc}
          </chakra.h1>
          <Text fontSize="md" noOfLines={2}>
            {contentType}
          </Text>
        </VStack>
        <Text fontSize="sm">{modifiedAt}</Text>
      </Box>
    </HStack>
  );
};

export default TimelineCard;
