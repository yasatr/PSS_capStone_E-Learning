import React, { useEffect, useState } from "react";
import { Heading, InputRightElement, Flex, Input, InputGroup, Grid } from "@chakra-ui/react";
import axios from "axios";
import Cookies from "universal-cookie";
import MyCourseCard from "../../Components/Card/MyCourseCard";
import NoData from "../../Components/Styles/NoData";
import { Paginate } from "react-paginate-chakra-ui";

function MyCourse() {
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [itemsPerPage, SetItemsPerPage] = useState(4); 
  const handlePageClick = (p) => setPage(p);
  const APIurl = `http://localhost:8080/myCourse?userId=${user?.userId}`;
  const indexOfLastItem = (1 + page) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  console.log("CI: ", currentItems);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(APIurl);
        const output = await response.data;
        setData(output);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourse();
  }, []);
  console.log(data);

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
      <Heading textAlign={"center"}>My Courses</Heading>
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
        {/* {data.length !== 0 ? ( */}
        { input === "" ?
          (currentItems.map((item, index) => (
            <div key={index}>
              <MyCourseCard item={item} />
            </div>
          ))) : 
          (
            filteredData.map((item) => (
              <MyCourseCard item={item} />
            ))
          )
        }
        {/* {data.length !== 0 ? (
          data.map((datas) => (
            <SmallCourseCard singleObject={datas} key={datas.courseId} />
          ))
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            <NoData />
          </Box>
        )} */}
      </Grid>
      <Flex alignItems={"center"} justifyContent={"center"}>
      <Paginate
        page={page}
        count={data.length}
        pageSize={itemsPerPage}
        onPageChange={handlePageClick}
        margin={2}
        shadow="lg"
        fontWeight="blue"
        variant="outline"
        border="2px solid"
        // w="full"
      />
      {/* <Paginate currentPage={page} onPageChange={handlePageClick} /> */}
      </Flex>
    </div>
  );
}

export default MyCourse;
