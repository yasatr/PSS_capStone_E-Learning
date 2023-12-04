import React, { useState } from 'react'
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
    Link
  } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router';


const SignIn = () => {
    const navigate = useNavigate();
    const[showPassword, setShowPassword] = useState(false);
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSignIn = async() => {
        try{
            const response = await axios.post('http://localhost:8080/login',{
                email,
                password,
            })
            const allowedFields = ['userId', 'firstName', 'lastName', 'email', 'phoneNo', 'role', 'profilePicUrl'];
            const userData = Object.keys(response.data).filter(field=>allowedFields.includes(field)).reduce((acc, field)=>{
              acc[field] = response.data[field];
              return acc;
            },{});
            document.cookie = `user=${JSON.stringify(userData)};path=/`;
            console.log('Login Successful', userData);
            navigate("/dashboard");
        }catch(error){
            console.error('Login Failed', error.message)
        }
    }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder='Enter your email id' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword? 'text' : 'password'} placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                    <Button 
                        variant={'ghost'}
                        onClick={()=>setShowPassword((showPassword)=> !showPassword)}
                    >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
              </InputGroup>
              
            </FormControl>
            <Stack spacing={10}>
              <Button
                type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSignIn}>
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Dont't have account? <Link color={'blue.400'} href='/' >SignUp</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default SignIn