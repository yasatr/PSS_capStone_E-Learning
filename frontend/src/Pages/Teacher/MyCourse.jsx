import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import { SimpleGrid, Box } from "@chakra-ui/react";
import SmallCourseCard from "../../Components/Card/SmallCourseCard";
import { async } from "q";
import Cookies from "js-cookie";
import axios from "axios";

function MyCourse() {
  
  const userCookie = Cookies.get("user") || {};
  const user = JSON.parse(userCookie);

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
      {/* <Navbar /> */}
      <SimpleGrid columns={3} spacing={10} >
      {data.map(datas => (
        <SmallCourseCard singleObject={datas} key={datas.courseId}/>
      ))}
      </SimpleGrid>
    </div>
  );
}

export default MyCourse;