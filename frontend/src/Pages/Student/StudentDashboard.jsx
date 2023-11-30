import { Box, Heading, VStack, StackDivider } from "@chakra-ui/react";
import React from "react";
import CardSlider from "../../Components/Slider/CardSlider";

const StudentDashboard = () => {
  return (
    <Box
      
    >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={10}
        align="stretch"
      >
        <Box>
          <Heading>In Progress</Heading>
          <CardSlider />
        </Box>
        <Box>
          <Heading>Completed</Heading>
          <CardSlider />
        </Box>
      </VStack>
    </Box>
  );
};

export default StudentDashboard;
