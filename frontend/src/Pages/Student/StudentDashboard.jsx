import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { Box, Heading, VStack, StackDivider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CardSlider from "../../Components/Slider/CardSlider";
import axios from "axios";

const StudentDashboard = () => {
  const [data, setData] = useState([]);
  const APIURL = "http://localhost:8080/allCourse";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APIURL);
        setData(response.data);
      } catch (error) {
        console.error("Error Fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, [data]);

  const navigate = useNavigate();
  return (
    <Box>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={10}
        align="stretch"
      >
        <Box>
          <Heading>In Progress</Heading>
          <CardSlider data={data} />
        </Box>
        <Box>
          <Heading>Completed</Heading>
          {/* <CardSlider /> */}
        </Box>
      </VStack>
    </Box>
  );
};

export default StudentDashboard;
