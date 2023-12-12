import { Box, HStack, StackDivider } from "@chakra-ui/react";
import React, { useState } from "react";
import Timeline from "../../Components/Timeline/Timeline";
import AddContent from "../../Components/Form/AddContent";

const Content = () => {
  const [update, setUpdate] = useState(false);

  const handleButtonClick = () => {
    setUpdate(!update);
  };

  return (
    <HStack
      spacing={8}
      divider={<StackDivider borderColor="gray.200" />}
      w="full"
      maxH="80vh"
    >
      <Box p={8} flex="6" overflowY="auto" maxH="80vh" marginTop="10">
        <Timeline update={update} />
      </Box>
      <Box p={8} flex="4" marginTop="-20">
        <AddContent onButtonClick={handleButtonClick} />
      </Box>
    </HStack>
  );
};

export default Content;
