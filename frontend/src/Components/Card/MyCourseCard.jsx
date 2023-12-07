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

function MyCourseCard(props) {
  const { item } = props;
  let src = item.imgUrl
    ? item.imgUrl
    : "https://th.bing.com/th/id/OIP.CYBL9A2z5S-3UquGa_geZAAAAA?rs=1&pid=ImgDetMain";
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
            <Heading size="md">{item.courseTitle}</Heading>
            <Text>{item.courseDesc}</Text>
            <Text color="blue.600" fontSize="2xl">
              &#x20b9;450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        {/* <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Enroll now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter> */}
      </Card>
    </div>
  );
}

export default MyCourseCard;
