import React, { useState, useEffect } from "react";
import { Grid, Stack } from "@chakra-ui/react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import MyCourseCard from "../../Components/Card/MyCourseCard";
import Cookies from "universal-cookie";
import { Paginate } from "react-paginate-chakra-ui";

const MyCourses = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const pageSize = 4;
  const APIurl = `http://localhost:8080/enrolledCourses?userId=${user?.userId}&page=${page}&size=${pageSize}`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(APIurl);
        const output = await response.data.content;
        setData(output);
        console.log("response: ", output);
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
    <div>
      <Heading textAlign={"center"}>My Courses</Heading>
      <>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.map((item, index) => (
            <div key={index}>
              <MyCourseCard item={item} />
            </div>
          ))}
        </Grid>
      </>
      <Stack p={5}>
        <Paginate
          page={page}
          // count={Math.ceil(data.length / pageSize)}
          count={100}
          pageSize={10}
          onPageChange={handlePageClick}
          margin={2}
          _dark={{ color: "inherit" }}
          shadow="lg"
          fontWeight="blue"
          variant="outline"
          border="2px solid"
          w="full"
        />
        <Heading size="md" textAlign={"right"}>
          Page: {page}
        </Heading>
      </Stack>
    </div>
  );
};

export default MyCourses;
