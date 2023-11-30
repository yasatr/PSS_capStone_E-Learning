import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";

function AddCourse() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <div>
      <Button onClick={onOpen}>Buy Course</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Course Title</FormLabel>
              <Input placeholder="Course Title" />
              <FormLabel>Course Description</FormLabel>
              <Input placeholder="Course Description" />
              <FormLabel>Logo Url</FormLabel>
              <Input placeholder="Logo Url" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Add Course
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddCourse;
