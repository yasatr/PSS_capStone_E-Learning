import { useNavigate } from "react-router-dom";
import { Box, Heading, VStack, StackDivider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CardSlider from "../../Components/Slider/CardSlider";
import fetchCourse from "../../ApiCall/FetchMyCourse";
import Cookies from "universal-cookie";
import NoData from "../../Components/Styles/NoData";
import Loader from "../../Components/Loader/Loader";

const StudentDashboard = () => {
  const [dataComplete, setDataComplete] = useState([]);
  const [dataProgress, setDataProgress] = useState([]);
  const [dataLoaded,setDataLoaded] = useState(false);

  const cookies = new Cookies();
  const user = cookies.get("user") || {};

  useEffect(() => {
    fetchCourse(
      `http://localhost:8080/enrolledCompleted?userId=${user?.userId}`
    ).then((result) => {
      // console.log(result);
      setDataComplete(result);
      setDataLoaded(true);
    });
    fetchCourse(
      `http://localhost:8080/enrolledProgress?userId=${user?.userId}`
    ).then((result) => {
      // console.log(result);
      setDataProgress(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <Loader dataLoaded={dataLoaded}>
    <Box p={4}>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={10}
        align="stretch"
      >
        <Box>
          <Heading>In Progress</Heading>
          {dataProgress.length !== 0 ? (
            <CardSlider data={dataProgress} />
          ) : (
            <NoData />
          )}
        </Box>
        <Box>
          <Heading>Completed</Heading>
          {dataComplete.length !== 0 ? (
            <CardSlider data={dataComplete} />
          ) : (
            <NoData />
          )}
        </Box>
      </VStack>
    </Box>
    </Loader>
  );
};

export default StudentDashboard;
