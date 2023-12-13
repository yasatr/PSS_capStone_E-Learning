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
const AddContent = ({ onButtonClick }) => {
  // const navigate = useNavigate();

  const location = useLocation();

  const { courseId } = location.state;
  const [formData, setFormData] = useState({
    courseId: courseId,
    contentUrl: "",
    contentDesc: "",
    contentType: "",
  });
  const [errors, setErrors] = useState({
    contentUrl: "",
    contentDesc: "",
  });

  const handleChange = (e, value) => {
    // setFormData({...formData,[e.target.id]:e.target.value});
    setErrors({ ...errors, [e]: "" });
    switch (e) {
      case "contentDesc":
        if (value.length < 10) {
          setErrors({
            ...errors,
            [e]: "Description must be atleast 10 characters long",
          });
        }
        break;
      case "contentUrl":
        const urlRegex = /^(ftp|http|https):\/\/[^'']+$/;
        if (!urlRegex.test(value)) {
          setErrors({ ...errors, [e]: "Invalid url format" });
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
      const response = await axios.post(
        "http://16400-LT-X0035.na.msds.rhi.com:8080/content",
        formData
      );
      onButtonClick();
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
            Add Content
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="contentUrl" isInvalid={errors.contentUrl !== ""}>
              <FormLabel>Content URL</FormLabel>
              <Input
                placeholder="Enter the url of content"
                type="text"
                onChange={(e) => handleChange("contentUrl", e.target.value)}
                value={formData.contentUrl}
              />
              <FormErrorMessage>{errors.profilePicUrl}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="contentDesc"
              isInvalid={errors.contentDesc !== ""}
              isRequired
            >
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Enter Content Description"
                type="text"
                onChange={(e) => handleChange("contentDesc", e.target.value)}
                value={formData.contentDesc}
              />
              <FormErrorMessage>{errors.contentDesc}</FormErrorMessage>
            </FormControl>
            <FormControl id="contentType" isRequired>
              <FormLabel>Choose Content Type</FormLabel>
              <RadioGroup
                onChange={(value) => handleChange("contentType", value)}
              >
                <HStack spacing="24px">
                  <Radio value="Video">Video</Radio>
                  <Radio value="PDF">PDF</Radio>
                  <Radio value="Image">Image</Radio>
                </HStack>
              </RadioGroup>
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
                Add
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AddContent;
