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
  const [course, setCourse] = useState({});

  // const handleChange = (e) => {
  //   setCourse({...course, [e.target.id]:e.target.value});
  // }
 
  const url = 'http://localhost:8080/addCourse?userId=1';
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
      <Button onClick={onOpen}>Add Course</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired id="courseTitle" >
              <FormLabel>Course Title</FormLabel>
              <Input placeholder="Course Title"  onChangeCapture={(e) => setCourse({ ...course, courseTitle: e.target.value })} value={course.courseTitle} />
            </FormControl>

            <FormControl isRequired id="courseDesc">
              <FormLabel>Course Description</FormLabel>
              <Input id="courseDesc" placeholder="Course Description" onChangeCapture={(e) => setCourse({ ...course, courseDesc: e.target.value })} />
              </FormControl>
            <FormControl isRequired id="courseUrl">
              <FormLabel>Logo Url</FormLabel>
              <Input id="courseUrl" placeholder="Logo Url" onChangeCapture={(e) => setCourse({ ...course, imgUrl: e.target.value })}  />
            </FormControl>
            <FormControl>
              <FormLabel>Start Data</FormLabel>
              <Input isRequired id="courseStart" placeholder="Start Date" onChangeCapture={(e) => setCourse({ ...course, startDate: e.target.value })} type="date" />
            </FormControl>
            <FormControl>
              <FormLabel>End Date</FormLabel>
              <Input isRequired id="courseEnd" placeholder="End Date" onChangeCapture={(e) => setCourse({ ...course, endDate: e.target.value })} type="date" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit} onClickCapture={onClose}>
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
