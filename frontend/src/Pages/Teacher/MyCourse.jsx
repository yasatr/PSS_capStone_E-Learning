import React, { useEffect, useState } from "react";
import { SimpleGrid, Heading } from "@chakra-ui/react";
import SmallCourseCard from "../../Components/Card/SmallCourseCard";
import axios from "axios";
import Cookies from "universal-cookie";
import CourseCard from "../../Components/Card/CourseCard";


function MyCourse() {
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  console.log("user id: ", user);
  const [data, setData] = useState([]);
  const APIurl = `http://localhost:8080/myCourse?userId=${user?.userId}`;

  useEffect(() =>{
    const fetchCourse = async () =>{
      try{
        const response = await axios.get(APIurl);
        const output = await response.data;
        setData(output);
      } catch (error){
        console.log(error);
      }
    }
    fetchCourse();
  }, []);

  // useEffect(() => {
  //   console.log(data);
  //   // setIsLoading(false);
  // },[data]);

  return (
    <div>
       <Heading textAlign={"center"}>My Courses</Heading>
      <SimpleGrid columns={3} spacing={10} >
      {data.map(datas => (
        <CourseCard singleObject={datas} key={datas.courseId}/>
      ))}
      </SimpleGrid>
    </div>
  );
}

export default MyCourse;