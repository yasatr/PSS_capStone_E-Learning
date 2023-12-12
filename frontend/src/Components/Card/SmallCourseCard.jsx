import React, { useContext } from "react";
import { Box, Flex, HStack, chakra,   ButtonGroup, Button, CardFooter, Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function SmallCourseCard({ singleObject }) {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const user = cookies.get("user") || {};

  const handleClick = () => {
    {user.role === "teacher" ? (navigate("/content", {
      state: {
        courseId: singleObject.courseId,
        courseTitle: singleObject.courseTitle,
      },
      })) 
      : 
      (
        navigate("/student/content", {state: {
        courseId: singleObject.courseId
        }})
      )
    }
  };

  return (
    <div style={{ margin: "5px" }}>
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
          w="full"
        >
          <Box
            w={1 / 3}
            bgSize="cover"
            style={{
              backgroundImage: `url(./img/${singleObject.imgUrl})`,
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
              onClick={handleClick}
              cursor="pointer"
            >
              {singleObject.courseTitle}
            </chakra.h1>

            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {singleObject.courseDesc}
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

            <Flex mt={3} alignItems="center" justifyContent="space-between" flexWrap="wrap">
              <chakra.h1
                color="gray.900"
                fontWeight="bold"
                fontSize="lg"
                _dark={{
                  color: "white",
                }}
              >
                &#x20b9;450
              </chakra.h1>
            </Flex>
            <ButtonGroup spacing="2" m={1}>
              <Button variant="solid" colorScheme="blue" onClick={handleClick}>
                View Content
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
}

export default SmallCourseCard;
