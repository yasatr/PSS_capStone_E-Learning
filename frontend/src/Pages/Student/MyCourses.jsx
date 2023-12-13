import React, { useState, useEffect } from "react";
import { Stack, Heading, Grid } from "@chakra-ui/react";
import axios from "axios";
import MyCourseCard from "../../Components/Card/MyCourseCard";
import Cookies from "universal-cookie";
import { Paginate } from "react-paginate-chakra-ui";
import NoData from "../../Components/Styles/NoData";
import Loader from "../../Components/Loader/Loader";

const MyCourses = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const pageSize = 4;
  const APIurl = `http://16400-LT-X0035.na.msds.rhi.com:8080/enrolledCourses?userId=${user?.userId}&page=${page}&size=${pageSize}`;
  const [dataLoaded,setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(APIurl);
        const output = await response.data.content;
        setData(output);
        setDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [page]);

  const handlePageClick = (e) => {
    setPage(e);
  };

  return (
     <Loader dataLoaded={dataLoaded}>
    <div>
      <Heading textAlign={"center"}>My Courses</Heading>
      <>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.length !== 0 ? (
            data.map((item, index) => (
              <div key={index}>
                <MyCourseCard item={item} />
              </div>
            ))
          ) : (
            <NoData />
          )}
        </Grid>
      </>
      
      <Stack p={5} alignItems={"center"}>
        <Paginate
          page={page}
          // count={Math.ceil(data.length / pageSize)}
          count={10}
          pageSize={pageSize}
          onPageChange={handlePageClick}
          margin={2}
          _dark={{ color: "inherit" }}
          shadow="lg"
          fontWeight="blue"
          variant="outline"
          border="2px solid"
          w="half"
        />
        <Heading size="md" textAlign={"right"}>
          Page: {page}
        </Heading>
      </Stack>
    </div>
    </Loader>
  );
};

export default MyCourses;
