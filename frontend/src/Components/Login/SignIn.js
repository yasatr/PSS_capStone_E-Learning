import React, {  useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const cookies = new Cookies();
  const toast = useToast();

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(enteredEmail));
  };
  const handleSignIn = async () => {
    try {
      const responseData = await axios.post("http://16400-LT-X0035.na.msds.rhi.com:8080/login", {
        email,
        password,
      });
      const response = responseData.data;
      const allowedFields = [
        "userId",
        "firstName",
        "lastName",
        "email",
        "phoneNo",
        "role",
        "profilePicUrl",
      ];
      if (!response.data.email || !response.data.password) {
        throw new Error("Invalid username or password");
      }
      const userData = Object.keys(response.data)
        .filter((field) => allowedFields.includes(field))
        .reduce((acc, field) => {
          acc[field] = response.data[field];
          return acc;
        }, {});
      console.log(response.data);
      cookies.set("user", userData, { path: "/" });
      console.log("Login Successful", userData);
      toast({
        title: "Login Successfull",
        description: "Welcome back!",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      {
        userData.role === "student"
          ? navigate("/student")
          : navigate("/teacher");
      }
      setError(null);
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Try Again!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      if (error.message === "Invalid username or password") {
        setError("Invalid username or password. Please try again");
      } else {
        setError(error.message);
      }
      console.error("Login Failed", error.message);
    }
  };
  const handleKeyDown = (e)=>{
    if(e.key === "Enter"){
      handleSignIn();
    }
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email id"
                value={email}
                onChange={(e) => {setEmail(e.target.value);
                handleEmailChange(e);}}
                onKeyDown={handleKeyDown}
              />
            </FormControl>
            {isEmailValid || email === '' ? null : (
              <Text color="red" fontSize="sm">Invalid Email</Text>
            )}
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
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
            </FormControl>
            <Stack spacing={10}>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSignIn}
              >
                Sign in
              </Button>
              {error && <Text color="red">{error}</Text>}
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Dont't have account?{" "}
                <Link
                  style={{ color: "blue" }}
                  onMouseOver={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                  to="/signup"
                >
                  SignUp
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;
