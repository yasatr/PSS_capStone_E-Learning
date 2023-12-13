import axios from "axios";

//const APIurl = `http://16400-LT-X0035.na.msds.rhi.com:8080/myCourse?userId=${1}`;
//const APIurl = ``;

const fetchCourse = async (APIurl) => {
  try {
    const response = await axios.get(APIurl);
    const output = await response.data;
    return output;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default fetchCourse;
