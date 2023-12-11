import React, { useState, useEffect } from "react";
import { Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import MyCourseCard from "../../Components/Card/MyCourseCard";
import Cookies from "universal-cookie";
import { Paginate } from "react-paginate-chakra-ui";
import Loader from "../../Components/Loader/Loader";

const MyCourses = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const pageSize = 4;
  const APIurl = `http://localhost:8080/enrolledCourses?userId=${user?.userId}&page=${page}&size=${pageSize}`;
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
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
          {data.map((item, index) => (
            <div key={index}>
              <MyCourseCard item={item} />
            </div>
          ))}
        </SimpleGrid>
      </>
      
      <Stack p={{ base: 1, md: 5 }}>
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
          w={{ base: "90%", md: "full" }}
        />
        <Heading size={{ base: "sm", md: "md" }} textAlign={"right"}>
          Page: {page}
        </Heading>
      </Stack>
    </div>
    </Loader>
  );
};

export default MyCourses;
