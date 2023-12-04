import React, {  useState } from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  // const [input,setInput] = useState("");
  // const [filteredData, setFilteredData] = useState([]);


  const [dashboard, setDashboard] = useState({
    isClicked: true,
    variant: "solid",
  });
  const [myCourse, setMyCourse] = useState({
    isClicked: false,
    variant: "ghost",
  });
  const [allCourse, setAllCourse] = useState({
    isClicked: false,
    variant: "ghost",
  });

  const handleDashboard = () => {
    setDashboard({
      isClicked: true,
      variant: "solid",
    });
    setMyCourse({
      isClicked: false,
      variant: "ghost",
    });
    setAllCourse({
      isClicked: false,
      variant: "ghost",
    });
    navigate("/student");
  };

  const handleMyCourse = () => {
    setDashboard({
      isClicked: false,
      variant: "ghost",
    });
    setMyCourse({
      isClicked: true,
      variant: "solid",
    });
    setAllCourse({
      isClicked: false,
      variant: "ghost",
    });
    navigate("/student/myCourses");
  };

  const handleAllCourse = () => {
    setDashboard({
      isClicked: false,
      variant: "ghost",
    });
    setMyCourse({
      isClicked: false,
      variant: "ghost",
    });
    setAllCourse({
      isClicked: true,
      variant: "solid",
    });
    navigate("/student/allCourses");
  };

  // const handleSearch = (e) => {
  //   const searchInput = e.target.value;
  //   setInput(searchInput);
  //   const newFilter = data.filter((value) => {
  //     return value.first_name.toLowerCase().includes(searchInput.toLowerCase());
  //   });
  //     if (searchInput === "") {
  //       setFilteredData([]);
  //     } else {
  //       setFilteredData(newFilter);
  //     }
  // };


  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("user");
    navigate("/login");
  }

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  MyCourses
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  AllCourses
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Logo />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button
                variant={dashboard.variant}
                colorScheme={dashboard.isClicked ? "brand" : null}
                leftIcon={<AiFillHome />}
                size="sm"
                onClick={handleDashboard}
              >
                Dashboard
              </Button>
              <Button
                variant={myCourse.variant}
                colorScheme={myCourse.isClicked ? "brand" : null}
                leftIcon={<AiOutlineInbox />}
                size="sm"
                onClick={handleMyCourse}
              >
                My Courses
              </Button>
              <Button
                variant={allCourse.variant}
                colorScheme={allCourse.isClicked ? "brand" : null}
                leftIcon={<BsFillCameraVideoFill />}
                size="sm"
                onClick={handleAllCourse}
              >
                All Courses
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineSearch />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Search..."
                // onChange={(e) => handleSearch(e)}
              />
            </InputGroup>

            <chakra.a
              p={3}
              color="red.800"
              _dark={{ color: "inherit" }}
              rounded="sm"
              _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Button w="full" variant="ghost" onClick={handleLogout}>
              Log Out
            </Button>

            <Menu>
              <MenuButton>
                <Avatar
                  size="sm"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem onClick={() => {navigate("/profile")}}>My Account</MenuItem>
                  <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>About</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
