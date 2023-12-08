import React from "react";
import {
  Flex,
  Icon,
  IconButton,
  Textarea,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styles from "../../Pages/Teacher/AddCourse.module.css";


function FeedbackModal(props) {
  const { onAddFeedback } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [feedbackText, setFeedbackText] = useState("");
  const [feedback, setFeedback] = useState({});
  const [rating, setRating] = useState(0);
  const [state, setState] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(false);
  const [hover, setHover] = useState(null);

  const cookies = new Cookies();
  const user = cookies.get("user") || {};

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    setFeedback({
      ...feedback,
      userId: user.userId,
      courseId: "1",
      feedbackDesc: feedbackText,
      rating: rating,
    });
  };

  const url = `http://localhost:8080/feedback`;
  useEffect(() => {
    if (!buttonClicked) return;
    const addFeedback = async () => {
      if (state) return;
      setState(true);
      try {
        const response = await axios.post(url, feedback);
        const data = await response.data;
        setError(false);
        console.log("Feedback: ", data);
      } catch (error) {
        console.error("Feedback Error", error);
        setError(true);
      }
      setState(false);
      setButtonClicked(false);
      onAddFeedback(error);
    };
    addFeedback();
  }, [buttonClicked]);

  return (
    <div className={styles.center}>
      <Button onClick={onOpen}>Provide Feedback</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              isRequired
              placeholder="Type your feedback here..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              mb={4}
            />

            <Flex>
              {[1, 2, 3, 4, 5].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label>
                    <input type="radio" name="rating" value={currentRating} style={{display:"none"}}
                    onClick={() => handleStarClick(currentRating)} />
                    <FaStar
                      className="star"
                      color={currentRating <= (hover || rating) ? "#ffc107":"#e4e5e9"}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                      cursor="pointer"
                      size={40}
                    />
                  </label>
                );
              })}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setButtonClicked(true);
                handleSubmit();
              }}
              onClickCapture={onClose}
            >
              Add
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default FeedbackModal;
