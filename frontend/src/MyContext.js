// import React, { useState, useEffect, createContext } from 'react';
// import axios from 'axios';

// export const MyContext = React.createContext();

// const DataProvider = ({ children }) => {
//   const [data, setData] = useState([]);
  

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios("http://16400-LT-X0035.na.msds.rhi.com:8080/allCourse");
//       setData(result.data);
//     };

//     fetchData();
//   }, []);

//   return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
// };

// export default DataProvider;
