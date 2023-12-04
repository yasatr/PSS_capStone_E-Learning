import React from 'react'
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
  } from '@chakra-ui/react'
  import { useState } from 'react'
  import { useForm } from 'react-hook-form'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
  

const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showMatchPassword, setshowMatchPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        matchingpassword : "",
        phoneNumber : "",
        role : "",
        profilePic : ""

    })
    const [errors, setErrors] = useState({
        email : "",
        password : "",
        matchingpassword : "",
        phoneNumber : "",
        profilePic : "",
    })

    const handleChange=(e, value)=>{
        // setFormData({...formData,[e.target.id]:e.target.value});
            setErrors({...errors,[e]:""});
            switch(e){
                case 'email' : 
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(!emailRegex.test(value)){
                        setErrors({...errors,[e]:'Invalid email format'})
                    }
                    break;
                case 'password':
                    if(value.length < 8){
                        setErrors({...errors,[e]:'password must be atleast 8 characters long'});
                    }
                    break;
                case 'matchingpassword' :
                    if(value !== formData.password){
                        setErrors({...errors,[e]:'passwords do not match'})
                    }
                    break;
                case 'phoneNumber' :
                    const phoneNumberRegex = /^\d{10}$/;
                    if(!phoneNumberRegex.test(value)){
                        setErrors({...errors,[e]:'should be a 10 digit phone number'})
                    }
                    break;
                case 'profilePic' : 
                    const urlRegex = /^(ftp|http|https):\/\/[^'']+$/;
                    if(!urlRegex.test(value)){
                        setErrors({...errors,[e]:'Invalid url format'})
                    }
                    break;
                default :
                    break;
            }
            setFormData({
                ...formData,
                [e]:value,
            });
    }
    
    
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            with a new account!
          </Text>
        </Stack>
        <Box
          
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel >First Name</FormLabel>
                  <Input type="text" placeholder='Enter your first name' onChange={(e)=>handleChange("firstName", e.target.value)} value={formData.firstName}  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel >Last Name</FormLabel>
                  <Input type="text" placeholder='Enter your last name' onChange={(e)=>handleChange("lastName", e.target.value)} value={formData.lastName} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isInvalid={errors.email !== ''} isRequired>
              <FormLabel >Email address</FormLabel>
              <Input type="email" placeholder='Enter your email' onChange={(e)=>handleChange("email", e.target.value)} value={formData.email}/>
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={errors.password !== ''} isRequired>
              <FormLabel >Password</FormLabel>
              <InputGroup>
                <Input placeholder='Enter a strong password' type={showPassword ? 'text' : 'password'} onChange={(e)=>handleChange("password", e.target.value)} value={formData.password} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl id="matchingpassword" isInvalid={errors.matchingpassword !== ''} isRequired>
              <FormLabel >Retype Password</FormLabel>
              <InputGroup>
                <Input placeholder='Enter your password again' type={showMatchPassword ? 'text' : 'password'} onChange={(e)=>handleChange("matchingpassword", e.target.value)} value={formData.matchingpassword} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setshowMatchPassword((showMatchPassword) => !showMatchPassword)}>
                    {showMatchPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.matchingpassword}</FormErrorMessage>
            </FormControl>
            <FormControl id="phoneNumber" isInvalid={errors.phoneNumber !== ''} isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input placeholder='Enter your 10 digit mobile number' type="text" onChange={(e)=>handleChange("phoneNumber", e.target.value)} value={formData.phoneNumber} />
              <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
            </FormControl>
            <FormControl id="role" isRequired>
              <FormLabel>Choose a role</FormLabel>
              <RadioGroup onChange={(value)=>handleChange("role", value)} >
                <HStack spacing='24px'>
                    <Radio value='Student'>Student</Radio>
                    <Radio value='Teacher'>Teacher</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl id="profilePic" isInvalid={errors.profilePic !==''}>
              <FormLabel >Profile Picture</FormLabel>
              <Input placeholder='Enter the url of your picture' type="text" onChange={(e)=>handleChange("profilePic", e.target.value)} value={formData.profilePic}/>
              <FormErrorMessage>{errors.profilePic}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type='submit'
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={()=>{
                  navigate("/signin");
                  console.log(formData)
                }
                } >
                Sign up
              </Button>
            </Stack>
            {/* <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack> */}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}


export default SignUp