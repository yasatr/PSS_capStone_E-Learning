import axios from "axios";

//const APIurl = `http://localhost:8080/myCourse?userId=${1}`;
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
