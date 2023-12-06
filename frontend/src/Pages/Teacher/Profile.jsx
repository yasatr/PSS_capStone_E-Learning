import React, { useState } from "react";
import {
  Stack,
  Heading,
  Button,
  Box,
  chakra,
  GridItem,
  SimpleGrid,
  Input,
  FormLabel,
  FormControl,
  Image,
  IconButton,
  Highlight
} from "@chakra-ui/react";
import { BsPencil } from "react-icons/bs";
import Cookies from "universal-cookie";

function Profile() {
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  console.log(user);
  const { firstName, lastName, email, phoneNo, profilePicUrl, role } = user;
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Box
        bg="#edf3f8"
        _dark={{
          bg: "#111",
        }}
        p={10}
      >
        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                
                <Heading lineHeight="tall" size="4xl">Hi, {firstName} <br/>
                </Heading>
                      <Highlight
                        query={[role]}
                        styles={{
                          px: "5",
                          py: "3",
                          rounded: "full",
                          bg: "teal.100",
                          fontSize: "25"
                        }}
                      >
                        {role}
                      </Highlight>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <IconButton
                colorScheme="teal"
                size="sm"
                icon={<BsPencil />}
                onClick={() => {
                  setEditMode(true);
                }}
                float="right"
              />
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg="white"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={6}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <Image
                      borderRadius="30%"
                      boxSize="120px"
                      src={profilePicUrl}
                      alt="Babu Rao"
                      w="100%"
                    />
                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="image"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Image URL
                      </FormLabel>
                      {editMode ? (
                        <Input
                          type="text"
                          name="image"
                          id="image"
                          autoComplete="given-name"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={profilePicUrl}
                        />
                      ) : (
                        <Input
                          type="text"
                          name="image"
                          id="image"
                          autoComplete="given-name"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={profilePicUrl}
                          disabled
                        />
                      )}
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        First name
                      </FormLabel>
                      {editMode ? (
                        <Input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={firstName}
                        />
                      ) : (
                        <Input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={firstName}
                          disabled
                        />
                      )}
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="last_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Last name
                      </FormLabel>
                      {editMode ? (
                        <Input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={lastName}
                        />
                      ) : (
                        <Input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={lastName}
                          disabled
                        />
                      )}
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="email_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Email address
                      </FormLabel>
                      {editMode ? (
                        <Input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autoComplete="email"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={email}
                        />
                      ) : (
                        <Input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autoComplete="email"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={email}
                          disabled
                        />
                      )}
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="phone"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Phone
                      </FormLabel>
                      {editMode ? (
                        <Input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="email"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={phoneNo}
                        />
                      ) : (
                        <Input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="email"
                          mt={1}
                          focusBorderColor="brand.400"
                          shadow="sm"
                          size="sm"
                          w="full"
                          rounded="md"
                          value={phoneNo}
                          disabled
                        />
                      )}
                    </FormControl>
                    <br></br>
                  </SimpleGrid>
                </Stack>
                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="gray.50"
                  _dark={{
                    bg: "#121212",
                  }}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    colorScheme="brand"
                    _focus={{
                      shadow: "",
                    }}
                    fontWeight="md"
                  >
                    Edit
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}

export default Profile;
