import React, { useState } from 'react'
import {
    Flex,
    FormControl,
    Text,
    Input,
    Textarea,
    Button,
    useMediaQuery,
    useToast,
  } from '@chakra-ui/react';

const ContactUs = () => {
    const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
    const toast = useToast();
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    };
  const submitForm = () => {
    if (!formData.fullName || !formData.email || !formData.message){
      return toast({
        title: 'Please fill all required fields! 😕',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
    }
    return toast({
      title: 'Message sent!🚀',
      description: 'Thank you for contacting us!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <div id='contactUs'>
    <Flex
      w="full"
      minHeight="90vh"
      py="16"
      px={isLargerThanLG ? '16' : '6'}
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Text fontSize="3xl" mb="6">
        Contact Us
      </Text>

      <FormControl
        w={isLargerThanLG ? '60%' : 'full'}
        display="flex"
        flexDirection="column"
        alignItems="start"
      >
        <Input
          id="fullName"
          type="text"
          placeholder="Full Name"
          mb="5"
          h="14"
          value={formData.fullName}
          onChange={handleChange}
        />

        <Input id="email" type="email" placeholder="Email" mb="5" h="14" value={formData.email}
            onChange={handleChange} />

        <Input id="subject" type="text" placeholder="Subject" mb="5" h="14" value={formData.subject}
            onChange={handleChange}/>

        <Textarea id="message" placeholder="Enter a message" mb="5" rows={7} p="5" value={formData.message}
            onChange={handleChange}/>

        <Button
          colorScheme="blue"
          size="lg"
          textAlign="left"
          width="200px"
          type="submit"
          onClick={submitForm}
        >
          SUBMIT
        </Button>
      </FormControl>
    </Flex>
    </div>
  )
}

export default ContactUs