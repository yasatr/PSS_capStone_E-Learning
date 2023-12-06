import React, { useEffect, useState, useContext } from "react";
import { Heading, Grid } from "@chakra-ui/react";
import CourseCard from "../../Components/Card/CourseCard";
import fetchCourse from "../../ApiCall/FetchMyCourse";
import { MyContext } from "../../MyContext";

const AllCourses = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const { filteredData } = useContext(MyContext);
  console.log(filteredData);

  const handlePageClick = (e) => {
    setPage(e);
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
      <Heading textAlign={"center"}>All Courses</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.map((datas) => (
          <CourseCard singleObject={datas} key={datas.courseId} />
        ))}
      </Grid>
    </div>
  );
};

export default AllCourses;
