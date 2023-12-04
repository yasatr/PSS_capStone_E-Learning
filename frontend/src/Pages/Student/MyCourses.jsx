import React, { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import CourseCard from "../../Components/Card/CourseCard";

const MyCourses = () => {
  const [data, setData] = useState([]);
  const APIurl = "http://localhost:8080/allCourse";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(APIurl);
        const output = await response.data;
        setData(output);
        // console.log(output);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Heading textAlign={"center"}>My Courses</Heading>
      <>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.map((item, index) => (
            <div key={index}>
              <CourseCard item={item} />
            </div>
          ))}
        </Grid>
      </>
    </div>
  );
};

export default MyCourses;
