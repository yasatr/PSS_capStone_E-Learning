import React, { useEffect, useState } from "react";
import CardSlider from "../../Components/Slider/CardSlider";
import AddCourse from "./AddCourse";
import fetchCourse from "../../ApiCall/FetchMyCourse";
import Cookies from "universal-cookie";
import { useToast } from "@chakra-ui/react";
import FeedbackModal from "../../Components/Feedback/FeedbackModal";

function TeacherDashboard() {
  const [data, setData] = useState([]);
  const [courseAdded, setCourseAdded] = useState(false);
  const toast = useToast();

  const cookies = new Cookies();
  const user = cookies.get("user") || {};

  // const url = `http://localhost:8080/myCourse?userId=${1}`;
  useEffect(() => {
    fetchCourse(`http://localhost:8080/myCourse?userId=${user?.userId}`)
    .then(
      (result) => {
        setData(result);
      }
    );
  }, [courseAdded]);

  const handleAddCourse = (error) => {
    // Logic to add a new course...
    // After adding a new course successfully, update courseAdded to trigger re-render
    console.log(error);
    if(error === false){
      toast({
        title: 'Course Added Successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }else{
      toast({
        title: 'Error Adding Course',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
    setCourseAdded(prev => !prev);
  };
 
  return (
    <div>
      <CardSlider data={data} />
      <AddCourse onAddCourse={handleAddCourse} />
      <FeedbackModal/>
    </div>
  );
}

export default TeacherDashboard;
