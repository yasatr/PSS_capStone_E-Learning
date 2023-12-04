import { border, useDisclosure } from "@chakra-ui/react";
import styles from './AddCourse.module.css';
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
import axios from "axios";
import { useState } from "react";

function AddCourse() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [course, setCourse] = useState({
    courseTitle: "",
    courseDesc: "",
    courseUrl: "",
    courseStart: "",
    courseEnd: ""
  });

  const handleChange = (e) => {
    setCourse({...course, [e.target.id]:e.target.value});
  }
 
  const url = 'http://localhost:8080/addCourse?userId=2';
  const addCourse = async (data) => {
    try{
      const res = await axios.post(url, data);
      const resData = res.data;
      console.log(resData);
    }
    catch(err){
      console.log(err);
    }
  }

  const handleSubmit = () => {
    addCourse(course)
  }

  return (
    <div className={styles.center}>
      <Button onClick={onOpen}>Buy Course</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired id="courseTitle" >
              <FormLabel>Course Title</FormLabel>
              <Input placeholder="Course Title"  onChange={handleChange} value={course.courseTitle} />
            </FormControl>

            <FormControl isRequired id="courseDesc">
              <FormLabel>Course Description</FormLabel>
              <Input id="courseDesc" placeholder="Course Description" onChange={handleChange} value={course.courseDesc}  />
              </FormControl>
            <FormControl isRequired id="courseUrl">
              <FormLabel>Logo Url</FormLabel>
              <Input id="courseUrl" placeholder="Logo Url" value={course.courseUrl} onChange={handleChange}  />
            </FormControl>
            <FormControl>
              <FormLabel>Start Data</FormLabel>
              <Input isRequired id="courseStart" placeholder="Start Date" value={course.courseStart} onChange={handleChange} type="date" />
            </FormControl>
            <FormControl>
              <FormLabel>End Date</FormLabel>
              <Input isRequired id="courseEnd" placeholder="End Date" value={course.courseEnd} onChange={handleChange} type="date" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
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
