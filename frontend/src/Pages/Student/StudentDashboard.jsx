import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Box, Heading, VStack, StackDivider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CardSlider from "../../Components/Slider/CardSlider";
import axios from "axios";
import Cookies from "universal-cookie";
import fetchCourse from "../../ApiCall/FetchMyCourse";

const StudentDashboard = () => {
  const [dataComplete, setDataComplete] = useState([]);
  const [dataProgress, setDataProgress] = useState([]);

  const cookies = new Cookies();
  const user = cookies.get("user") || {};

  useEffect(() => {
    fetchCourse(
      `http://localhost:8080/enrolledCompleted?userId=${user?.userId}`
    ).then((result) => {
      // console.log(result);
      setDataComplete(result);
    });
    fetchCourse(
      `http://localhost:8080/enrolledProgress?userId=${user?.userId}`
    ).then((result) => {
      // console.log(result);
      setDataProgress(result);
    });
  }, []);

  return (
    <Box p={4}>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={10}
        align="stretch"
      >
        <Box>
          <Heading>In Progress</Heading>
          <CardSlider data={dataProgress} />
        </Box>
        <Box>
          <Heading>Completed</Heading>
          <CardSlider data={dataComplete} />
        </Box>
      </VStack>
    </Box>
  );
};

export default StudentDashboard;
