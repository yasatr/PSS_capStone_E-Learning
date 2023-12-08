import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Forgot = () => {
  //   const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showMatchPassword, setshowMatchPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e, value) => {
    // setFormData({...formData,[e.target.id]:e.target.value});
    setErrors({ ...errors, [e]: "" });
    switch (e) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrors({ ...errors, [e]: "Invalid email format" });
        }
        break;
      case "password":
        if (value.length < 8) {
          setErrors({
            ...errors,
            [e]: "password must be atleast 8 characters long",
          });
        }
        break;
      case "matchingPass":
        if (value !== formData.password) {
          setErrors({ ...errors, [e]: "passwords do not match" });
        }
        break;
      default:
        break;
    }
    setFormData({
      ...formData,
      [e]: value,
    });
  };
  const handleSignUp = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8080/forgot",
        formData
      );
    } catch (error) {
      console.error("Signup error :", error);
    }
    // navigate("/signin");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Forgot Password
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={errors.email !== ""} isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => handleChange("email", e.target.value)}
                value={formData.email}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password"
              isInvalid={errors.password !== ""}
              isRequired
            >
              <FormLabel>New Password</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Enter a strong password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => handleChange("password", e.target.value)}
                  value={formData.password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="matchingPass"
              isInvalid={errors.matchingPass !== ""}
              isRequired
            >
              <FormLabel>Retype Password</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Enter your password again"
                  type={showMatchPassword ? "text" : "password"}
                  onChange={(e) => handleChange("matchingPass", e.target.value)}
                  value={formData.matchingPass}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setshowMatchPassword(
                        (showMatchPassword) => !showMatchPassword
                      )
                    }
                  >
                    {showMatchPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.matchingPass}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSignUp}
              >
                Set Password
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Remember Password?{" "}
                <Link
                  style={{ color: "blue" }}
                  onMouseOver={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                  to="/signin"
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Forgot;
