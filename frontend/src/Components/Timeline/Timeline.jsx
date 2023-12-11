import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TimelineCard from "../Card/TimelineCard";
import LineDot from "../Styles/LineDot";
import fetchCourse from "../../ApiCall/FetchMyCourse";
import { useLocation } from "react-router-dom";
import NoData from "../Styles/NoData";

const Timeline = ({ update }) => {
  const [contents, setContents] = useState([]);

  const location = useLocation();
  const { courseId, courseTitle } = location.state;

  useEffect(() => {
    fetchCourse(`http://localhost:8080/allContent?courseId=${courseId}`).then(
      (result) => {
        console.log(result.data);
        setContents(result.data);
      }
    ).catch((err) => {
      console.log(err);
      setContents(null);
    });
  }, [update]);

  return (
    <Container maxWidth="4xl" p={{ base: 2, sm: 10 }} marginTop="-10">
      {contents != null ? (
        contents.map((content) => (
          <Flex key={content.contentId} mb="10px">
            <LineDot />
            <TimelineCard {...content} />
          </Flex>
        ))
      ) : (
        <Box>
          <NoData />
          {/* <Heading>No Content Availabale</Heading> */}
        </Box>
      )}
    </Container>
  );
};

export default Timeline;
