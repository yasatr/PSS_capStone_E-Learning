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

  return (
    <div>
      <Card maxW="sm" mt="5" backgroundcolor="#c9cce4">
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
