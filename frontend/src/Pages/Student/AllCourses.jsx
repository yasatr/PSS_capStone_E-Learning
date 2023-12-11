import React, { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import { Stack, Heading, InputRightElement, Flex, Input, InputGroup } from "@chakra-ui/react";
import { Paginate } from "react-paginate-chakra-ui";
import axios from "axios";
import MyCourseCard from "../../Components/Card/MyCourseCard";

const AllCourses = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const pageSize = 4;
  const APIurl = `http://localhost:8080/allCourse?page=${page}&size=${pageSize}`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(APIurl);
        const output = await response.data.content;
        setData(output);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [page]);

  const handlePageClick = (e) => {
    setPage(e);
  };
 
  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setInput(searchInput);
    const filteredData = data.filter((item) =>
      item.courseTitle.toLowerCase().includes(input.toLowerCase())
    );
    if (searchInput === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredData);
    }
  };

  return (
    <div>
      <Heading textAlign={"center"}>All Courses</Heading>
      <Flex justifyContent={"flex-end"}>
        <InputGroup size="md" width="350px">
          <Input
            pr="4.5rem"
            placeholder="Search..."
            value={input}
            onChange={(e) => handleSearch(e)}
          />
          <InputRightElement width="4.5rem"></InputRightElement>
        </InputGroup>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {input === ""
          ? data.map((item, index) => (
              <div key={index}>
                <MyCourseCard item={item} />
              </div>
            ))
          : filteredData.map((item, index) => (
              <div key={index}>
                <MyCourseCard item={item} />
              </div>
            ))}
      </Grid>
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

export default AllCourses;
