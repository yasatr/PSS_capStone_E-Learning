import * as React from "react";
import { Box, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure} from "@chakra-ui/react";
import ReactPlayer from 'react-player/youtube';
import { ChevronLeftIcon } from '@chakra-ui/icons'

function CourseContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box position="relative">
      <Button ref={btnRef} onClick={onOpen} position="fixed" right="0px" >
        <ChevronLeftIcon/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Course Content</DrawerHeader>

            <DrawerBody>
              {/* Place your course content here */}
              <p>Module 1: Introduction to the Course</p>
              <p>Module 2: Getting Started</p>
              <p>Module 3: Advanced Topics</p>
              {/* ... */}
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Video content */}
      <Box my={4} ml={10}>
        <ReactPlayer url='https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3' controls={true} width="90%" height={700} />
      </Box>
    </Box>
  );
}

export default CourseContent;
