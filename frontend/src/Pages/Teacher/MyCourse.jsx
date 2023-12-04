import React, { useEffect, useState} from "react";
import { SimpleGrid} from "@chakra-ui/react";
import SmallCourseCard from "../../Components/Card/SmallCourseCard";
import axios from "axios";
import Cookies from "js-cookie";

function MyCourse() {
  
  const userCookie = Cookies.get("user") || {};
  const user = JSON.parse(userCookie);
  const { userId } = userCookie;

  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const APIurl = `http://localhost:8080/myCourse?userId=${1}`

  
  useEffect(() =>{
    const fetchCourse = async () =>{
      try{
        const response = await axios.get(APIurl);
        const output = await response.data;
        setData(output);
        // console.log(data);
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