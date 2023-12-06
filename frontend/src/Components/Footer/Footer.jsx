import { Box, Divider, Flex, HStack, Icon, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <Box
        bg="white"
        _dark={{
          bg: "gray.600",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          w="full"
          justify="space-between"
          p={10}
        >
          <Flex justify="center">
            <Image
              src="https://th.bing.com/th/id/R.e67b585df9667e1e78ee74f7c10b4c70?rik=glFZMiRKF%2feo8w&riu=http%3a%2f%2fphotos.prnewswire.com%2fprnfull%2f20090115%2fAQTH541LOGO&ehk=Ohv2cwn5H%2f30j%2fFi1JvSjUW0fBN44HsREQEX%2flXIhBg%3d&risl=&pid=ImgRaw&r=0"
              alt="Company Logo"
              rounded="lg"
              width={{
                base: "150px",
                lg: "400px",
              }}
              height={{
                base: "75px",
                lg: "100px",
              }}
              my={{
                base: 2,
                lg: 0,
              }}
            />
          </Flex>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Pre-Sale FAQS</Link>
              <Link textTransform="uppercase">Submit a ticket</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Services</Link>
              <Link textTransform="uppercase">Theme Tweak</Link>
            </Flex>
          </HStack>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Show Case</Link>
              <Link textTransform="uppercase">Widget Kit</Link>
              <Link textTransform="uppercase">Support</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">About Us</Link>
              <Link textTransform="uppercase">Contact Us</Link>
              <Link textTransform="uppercase">Resources</Link>
            </Flex>
          </HStack>
        </Stack>
        <Divider
          w="95%"
          mx="auto"
          color="gray.600"
          _dark={{
            color: "#F9FAFB",
          }}
          h="3.5px"
        />
        <VStack py={3}>
          <HStack justify="center">
            <Link>
              <Icon
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>
            <Link>
              <Icon
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                h="20px"
                w="20px"
                as={FiTwitter}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: "white",
                }}
                h="20px"
                w="20px"
                as={GrInstagram}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: "white",
                }}
                h="20px"
                w="20px"
                as={FaLinkedinIn}
              />
            </Link>
          </HStack>

          <Text
            textAlign="center"
            fontSize="smaller"
            _dark={{
              color: "white",
            }}
          >
            &copy;Copyright. All rights reserved.
          </Text>
        </VStack>
      </Box>
    </div>
  );
}

export default Footer;
