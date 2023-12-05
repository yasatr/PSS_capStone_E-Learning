import React, { useEffect, useState } from "react";
import CardSlider from "../../Components/Slider/CardSlider";
import AddCourse from "./AddCourse";
import Footer from "../../Components/Footer/Footer";
import fetchCourse from "../../ApiCall/FetchMyCourse";
import Cookies from "js-cookie";

function TeacherDashboard() {
  const [data, setData] = useState([]);

  const userCookie = Cookies.get("user") || {};
  const user = JSON.parse(userCookie);

  // const url = `http://localhost:8080/myCourse?userId=${1}`;
  useEffect(() => {
    fetchCourse(`http://localhost:8080/myCourse?userId=${user?.userId}`)
    .then(
      (result) => {
        console.log("result hai: ", result);
        setData(result);
      }
    );
  }, [data]);
  return (
    <div>
      <CardSlider data={data} />
      <AddCourse />
    </div>
  );
}

export default TeacherDashboard;
