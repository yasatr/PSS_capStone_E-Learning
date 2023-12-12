import React, { useEffect, useState } from "react";
import CardSlider from "../../Components/Slider/CardSlider";
import AddCourse from "./AddCourse";
import fetchCourse from "../../ApiCall/FetchMyCourse";
import Cookies from "universal-cookie";
import { useToast } from "@chakra-ui/react";
import FeedbackModal from "../../Components/Feedback/FeedbackModal";
import Loader from "../../Components/Loader/Loader";

function TeacherDashboard() {
  const [data, setData] = useState([]);
  const [courseAdded, setCourseAdded] = useState(false);
  const toast = useToast();
  const [dataLoaded, setDataLoaded] = useState(false);

  const cookies = new Cookies();
  const user = cookies.get("user") || {};

  // const url = `http://localhost:8080/myCourse?userId=${1}`;
  useEffect(() => {
    fetchCourse(`http://localhost:8080/myCourse?userId=${user?.userId}`).then(
      (result) => {
        setData(result);
        setDataLoaded(true);
      }
    );
  }, [courseAdded]);

  const handleAddCourse = (error) => {
    // Logic to add a new course...
    // After adding a new course successfully, update courseAdded to trigger re-render
    console.log(error);
    if (error === false) {
      toast({
        title: "Course Added Successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "Error Adding Course",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
    setCourseAdded((prev) => !prev);
  };

  return (
    <Loader dataLoaded={dataLoaded}>
      <div>
        <CardSlider data={data} />
        <br />
        <AddCourse onAddCourse={handleAddCourse} />
        <br />
        <FeedbackModal />
      </div>
    </Loader>
  );
}

export default TeacherDashboard;
