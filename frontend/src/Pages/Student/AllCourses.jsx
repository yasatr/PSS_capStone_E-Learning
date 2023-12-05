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
import Loader from "../../Components/Loader/Loader";

const AllCourses = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCourse("http://localhost:8080/allCourse?page=0&size=4").then(
      (result) => {
        console.log("result hai: ", result);
        setData(result.content);
      }
    );
  }, []);

  return (
    <div>
      <Loader onLoadingComplete={handleLoadingComplete}/>
      {!isLoading && (
        <div>
        <Heading textAlign={"center"}>All Courses</Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.map((datas) => (
            <CourseCard singleObject={datas} key={datas.courseId} />
          ))}
        </Grid>
      </div>
      )}
    </div>
  );
};

export default AllCourses;
