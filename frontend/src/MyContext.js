import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const[isFooterVisible, setIsFooterVisible] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/allCourse");
      setData(result.data);
    };

    fetchData();
  }, [setIsNavbarVisible,setIsFooterVisible]);

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default DataProvider;
