import React, { useEffect, useState } from "react";
import { SimpleGrid, Heading, Box } from "@chakra-ui/react";
import SmallCourseCard from "../../Components/Card/SmallCourseCard";
import axios from "axios";
import Cookies from "universal-cookie";
import NoData from "../../Components/Styles/NoData";

function MyCourse() {
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  console.log("user id: ", user);
  const [data, setData] = useState([]);
  const APIurl = `http://localhost:8080/myCourse?userId=${user?.userId}`;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(APIurl);
        const output = await response.data;
        setData(output);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourse();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  //   // setIsLoading(false);
  // },[data]);

  console.log(data);

  return (
    <div>
      <Heading textAlign={"center"}>My Courses</Heading>
      <SimpleGrid columns={3} spacing={10}>
        {data.length !== 0 ? (
          data.map((datas) => (
            <SmallCourseCard singleObject={datas} key={datas.courseId} />
          ))
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            <NoData />
          </Box>
        )}
      </SimpleGrid>
    </div>
  );
}

export default MyCourse;
