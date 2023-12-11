import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";

function MyCourseCard(props) {
  const { item, showButton } = props;
  const location = useLocation();
  const navigate = useNavigate();
  let src = item.imgUrl
    ? item.imgUrl
    : "https://th.bing.com/th/id/OIP.CYBL9A2z5S-3UquGa_geZAAAAA?rs=1&pid=ImgDetMain";

    const handleClick = () => {
      navigate("/student/content", {state: {
        courseId: item.courseId
      }});
    }
  const cookies = new Cookies();
  const user = cookies.get("user") || {};

  const courseId = item.courseId;
  const userId = user.userId;

  const handleEnrollClick = async () => {
    await axios.post(
      `http://localhost:8080/addEnrollment?userId=${userId}&courseId=${courseId}`
    );
    console.log(courseId, userId);
  };

  return (
    <div>
      <Card maxW="sm" mt="5">
        <CardBody>
          <Image
            src={src}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" cursor="pointer" >{item.courseTitle}</Heading>
            <Text>{item.courseDesc}</Text>
            <Text color="blue.600" fontSize="2xl">
              &#x20b9;450
            </Text>
          </Stack>
        </CardBody>
        {user.role === "student" && showButton && (
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" onClick={handleEnrollClick}>
                Enroll now
              </Button>
            </ButtonGroup>
          </CardFooter>
        )}
        {user.role === "student" && location.pathname === "/student/myCourses" && (
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" onClick={handleClick}>
                View Content
              </Button>
            </ButtonGroup>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

export default MyCourseCard;
