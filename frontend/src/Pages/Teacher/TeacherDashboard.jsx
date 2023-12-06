import React, { useEffect, useState } from "react";
import CardSlider from "../../Components/Slider/CardSlider";
import AddCourse from "./AddCourse";
import Footer from "../../Components/Footer/Footer";
import fetchCourse from "../../ApiCall/FetchMyCourse";
import Cookies from "universal-cookie";

function TeacherDashboard() {
  const [data, setData] = useState([]);
  const [courseAdded, setCourseAdded] = useState(false);

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

  const handleAddCourse = () => {
    // Logic to add a new course...
    // After adding a new course successfully, update courseAdded to trigger re-render
    setCourseAdded(prev => !prev);
  };
 
  return (
    <div>
      <CardSlider data={data} />
      <AddCourse onAddCourse={handleAddCourse} />
    </div>
  );
}

export default TeacherDashboard;
