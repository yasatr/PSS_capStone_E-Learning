import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import { SimpleGrid, Box } from "@chakra-ui/react";
import SmallCourseCard from "../../Components/Card/SmallCourseCard";
import { async } from "q";


function MyCourse() {
  
  const userCookie = Cookies.get("user") || {};
  const { userId } = userCookie;

  const [data, setData] = useState([]);
  const APIurl = `http://localhost:8080/myCourse?userId=${1}`

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
  },[]);

  useEffect(() => {},[data]);

  return (
    <div>
      <Navbar />
      <SimpleGrid columns={3} spacing={10} >
      {data.map(datas => (
        <SmallCourseCard title={datas}/>
      ))}
      </SimpleGrid>
    </div>
  );
}

export default MyCourse;