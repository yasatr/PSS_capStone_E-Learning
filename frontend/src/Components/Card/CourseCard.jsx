import React, { useEffect, useState } from "react";
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

function CourseCard({ singleObject }) {
  // const userCookie = Cookies.get("user") || {};
  // const user = JSON.parse(userCookie);

  // const url = `http://localhost:8080/addEnrollment?userId=${user.userId}&courseId=${singleObject.courseId}`;
  // const addCourse = async () => {
  //   try {
  //     const res = await axios.post(url);
  //     const resData = await res.data.enrollment;

  //     console.log(user.userId);
  //     console.log(singleObject.courseId);
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleSubmit = () => {
  //   addCourse();
  // };

  return (
    <div>
      <Card maxW="sm" mt="5">
        <CardBody>
          <Image
            src={singleObject.imgUrl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{singleObject.courseTitle}</Heading>
            <Text>{singleObject.courseDesc}</Text>
            <Text color="#4d5499" fontSize="2xl" fontWeight="600">
              &#x20b9;450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" backgroundColor="#4d5499" color="white" /*onClick={handleSubmit}*/>
              Enroll now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CourseCard;
