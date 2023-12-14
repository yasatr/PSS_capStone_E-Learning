import React, {useEffect, useState} from "react";
import { Box, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Text, Badge, Image, Flex, useToast} from "@chakra-ui/react";
import ReactPlayer from 'react-player/youtube';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import axios from "axios";
import { useLocation } from "react-router";
import { Document, Page, pdfjs } from "react-pdf";
//import pdf from "../../TestPdf/reactjs_tutorial.pdf";
import NoData from "../../Components/Styles/NoData";
import FeedbackModal from "../../Components/Feedback/FeedbackModal";
import putReq from "../../ApiCall/putReq";
import Cookies from "universal-cookie";
import { title } from "process";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function CourseContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const location = useLocation();
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const toast = useToast();
  const { courseId } = location.state;
  const [data, setData] = useState([]);
  const [content, setContent] = useState({});
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const apiUrl = `http://16400-LT-X0035.na.msds.rhi.com:8080/allContent?courseId=${courseId}`;
  const url = `http://16400-LT-X0035.na.msds.rhi.com:8080/progress?userId=${user.userId}&courseId=${courseId}`;
  useEffect(() => {
    const fetchCourseContent = async () => {
      try {
        const responseData = await axios.get(apiUrl);
        const response = await responseData.data.data;
        setData(response);
        console.log("response: ", response);
      } catch (error) {
        setContent(null);
        setData(null);
        console.error("An error occurred: ", error);
      }
  }
    fetchCourseContent();
  }, []);

  useEffect(() => {
    // console.log("Response: ", data);
  }, [data]);

  const handleClick = (id) => {
    setContent(data[id]);
  }

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const handleDone = () => {
    putReq(url).then((result) => {
      toast({
        title: "Congratulations! 😎👍",
        description: "Course Completed 🎉",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    })
    .catch((err) => {

    });
  }

  return (
    <Box position="relative">
      <Button ref={btnRef} onClick={onOpen} position="fixed" right="0px" zIndex={100} >
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

            <DrawerBody textAlign={"center"} onClick={(e) => {handleClick(e.target.id)}}>
              {data.map((c, i) => (
                <Text cursor="pointer" bg="#ecefff" borderRadius="10" p="3" m="5" id={i} key={c.contentId}>
                  {c.contentDesc}
                  <Badge ml='1' colorScheme='green' variant={'outline'}>{c.contentType}</Badge>
                </Text>
              ))}
            </DrawerBody>

            <DrawerFooter>
              <FeedbackModal courseId={courseId}/><br/>
              <Button variant="outline" m={3} p={1} onClick={handleDone}>
                Mark As Done
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Video content */}
      { content ? 
        (content.contentType === "Video" ? 
        (
          <Box my={4} ml={10}>
            <ReactPlayer url={content.contentUrl} controls={true} width="90%" height={700} />
          </Box>
        ) 
        : 
        (content.contentType == "Pdf" ? 
        (
          <Box>
            <Box textAlign={"center"} ml={"30%"}>
              <Document /*file={pdf}*/ onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
              </Document>
            </Box>
            <Flex textAlign={"center"} alignItems={"center"} justifyContent={"center"} m={2}>
              <Button variant="outline" disabled={pageNumber < 1} onClick={previousPage} m={1} fontSize={25}><ChevronLeftIcon/></Button>
              <Text>Page - {pageNumber} of {numPages}</Text>
              <Button variant="outline" disabled={pageNumber >= numPages} onClick={nextPage} m={1} fontSize={25}><ChevronRightIcon/></Button>
            </Flex>
          </Box>
        ) 
        : 
        (
          <Box>
            <Image src={content.contentUrl} />
          </Box>
        ) 
        )) : (<NoData/>)
      }
    </Box>
  );
}

export default CourseContent;