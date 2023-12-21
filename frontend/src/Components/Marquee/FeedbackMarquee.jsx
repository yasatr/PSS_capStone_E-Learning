import React from "react";
import Marquee from "react-fast-marquee";
import FeedbackCard from "../Card/FeedbackCard";
import { useEffect } from "react";
import { useState } from "react";
import NoData from "../Styles/NoData";
import Cookies from "universal-cookie";
import axios from "axios";

function FeedbackMarquee() {
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const [data, setData] = useState([]);

  const APIURL = `http://16400-LT-X0035.na.msds.rhi.com:8080/feedbackTop?userId=${user?.userId}`;
  useEffect(() => {
    const getFeedback = async () => {
      try {
        const responseData = await axios.get(APIURL);
        const response = await responseData.data;
        setData(response);
        console.log("response: ", response);
      } catch (error) {
        setData(null);
        console.error("An error occurred: ", error);
      }
    };
    getFeedback();
  }, []);
  return (
    <Marquee
      autoFill="true"
      // gradientColor="#F8FBFD"
      // gradient="true"
      style={{ height: 290 }}
      onFinish={() => {}}
      onCycleComplete={() =>{}}
      pauseOnHover={true}
    >
      {data.length !== 0 ? (
        data.map((datas) => <FeedbackCard datas={datas} />)
      ) : (
        <NoData />
      )}
    </Marquee>
  );
}

export default FeedbackMarquee;
