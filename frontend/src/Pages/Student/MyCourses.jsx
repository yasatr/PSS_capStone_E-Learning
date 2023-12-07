import React, { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import MyCourseCard from "../../Components/Card/MyCourseCard";
import Cookies from "universal-cookie";


const MyCourses = () => {
  const [data, setData] = useState([]);
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const APIurl = `http://localhost:8080/myCourse?userId=${user?.userId}`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(APIurl);
        const output = await response.data;
        setData(output);
        // console.log("response: ", output);
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
              <MyCourseCard item={item} />
            </div>
          ))}
        </Grid>
      </>
    </div>
  );
};

export default MyCourses;
