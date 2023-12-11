import React, { useEffect, useState } from "react";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import Cookies from "universal-cookie";
import MyCourseCard from "../../Components/Card/MyCourseCard";
import NoData from "../../Components/Styles/NoData";
import Loader from "../../Components/Loader/Loader";

function MyCourse() {
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const [data, setData] = useState([]);
  const [dataLoaded,setDataLoaded] = useState(false);
  const APIurl = `http://localhost:8080/myCourse?userId=${user?.userId}`;
 

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(APIurl);
        const output = await response.data;
        setData(output);
        setDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourse();
  }, []);
  console.log(data);

  return (
    <Loader dataLoaded={dataLoaded}>
    <div>
      <Heading textAlign={"center"}>My Courses</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
        {/* {data.length !== 0 ? ( */}
        {data.map((item, index) => (
          <div key={index}>
            <MyCourseCard item={item} />
          </div>
        ))}

        {/* {data.length !== 0 ? (
          data.map((datas) => (
            <SmallCourseCard singleObject={datas} key={datas.courseId} />
          ))
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            <NoData />
          </Box>
        )} */}
      </SimpleGrid>
    </div>
    </Loader>
  );
}

export default MyCourse;
