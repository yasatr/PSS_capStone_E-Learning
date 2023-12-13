import axios from "axios";

// const url = "http://16400-LT-X0035.na.msds.rhi.com:8080/progress?userId=";
const putReq = async (url, body) => {
    try{
        const responseData = await axios.put(url, body);
        const response = await responseData.data;
        console.log(response);
        // console.log(body);
    }
    catch(err){
        console.log(err);
        return err;
    }
}

export default putReq;