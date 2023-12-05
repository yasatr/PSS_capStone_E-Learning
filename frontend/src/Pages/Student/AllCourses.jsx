import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Grid,
} from "@chakra-ui/react";
import CourseCard from "../../Components/Card/CourseCard";
import fetchCourse from "../../ApiCall/FetchMyCourse";


const AllCourses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCourse("http://localhost:8080/allCourse").then(
      (result) => {
        console.log("result hai: ", result);
        setData(result);
      }
    );
  }, []);

  return (
    <div>
      <Heading textAlign={"center"}>All Courses</Heading>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
      {data.map(datas => (
        <CourseCard singleObject={datas} key={datas.courseId}/>
      ))}
      </Grid>
      
    </div>
  );
};

export default AllCourses;
