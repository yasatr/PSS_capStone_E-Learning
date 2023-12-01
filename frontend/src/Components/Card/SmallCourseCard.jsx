import React from "react";
import { Box, Flex, HStack, chakra } from "@chakra-ui/react";

function SmallCourseCard(props) {
    const {courseTitle, courseDesc,imgUrl } = props
  return (
    <div>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#bac1c7",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        borderRadius="10"
        
      >
        <Flex
          maxW="md"
          mx="auto"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Box
            w={1 / 3}
            bgSize="cover"
            style={{
              backgroundImage:
              `url(./img/${imgUrl})`,
            }}
          ></Box>

          <Box
            w={2 / 3}
            p={{
              base: 4,
              md: 4,
            }}
          >
            <chakra.h1
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              {courseTitle}
            </chakra.h1>

            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {courseDesc}
            </chakra.p>

            {/* <HStack spacing={1} display="flex" alignItems="center" mt={2}>
              <StarIcon
                color="gray.700"
                _dark={{
                  color: "gray.300",
                }}
              />
              <StarIcon
                color="gray.700"
                _dark={{
                  color: "gray.300",
                }}
              />
              <StarIcon
                color="gray.700"
                _dark={{
                  color: "gray.300",
                }}
              />
              <StarIcon color="gray.500" />
              <StarIcon color="gray.500" />
            </HStack> */}

            <Flex mt={3} alignItems="center" justifyContent="space-between">
              <chakra.h1 color="#edf3f8" fontWeight="bold" fontSize="lg">
                $220
              </chakra.h1>
              <chakra.button
                px={2}
                py={1}
                bg="white"
                fontSize="xs"
                color="gray.900"
                fontWeight="bold"
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: "gray.200",
                }}
                _focus={{
                  bg: "gray.400",
                }}
              >
                Add to cart
              </chakra.button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      
    </div>
  );
}

export default SmallCourseCard;
