import React, { useState } from "react";
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
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  useToast,
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Navbar = (props) => {
  const cookies = new Cookies();
  const user = cookies.get("user") || {};
  const toast = useToast();
  
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
    {
      user.role === "student" ? navigate("/student") : navigate("/teacher");
    }
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
    {
      user.role === "student"
        ? navigate("/student/myCourses")
        : navigate("/teacher/myCourse");
    }
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

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = () => {
    cookies.remove("user");
    toast({
      title: 'Logout Successfull',
      description: 'Please visit again',
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'top-right',
    });
    navigate("/signin");
  };

  let src = user.profilePicUrl
    ? user.profilePicUrl
    : "https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0";

  // console.log('Rendering Navbar')
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        position="relative"
        zIndex="banner"
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
                <Button
                  w="full"
                  variant={dashboard.variant}
                  colorScheme={dashboard.isClicked ? "brand" : null}
                  leftIcon={<AiFillHome />}
                  onClick={handleDashboard}
                >
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant={myCourse.variant}
                  colorScheme={myCourse.isClicked ? "brand" : null}
                  leftIcon={<AiOutlineInbox />}
                  onClick={handleMyCourse}
                >
                  MyCourses
                </Button>
                {user.role === "student" ? (
                <Button
                  w="full"
                  variant={allCourse.variant}
                  colorScheme={allCourse.isClicked ? "brand" : null}
                  leftIcon={<AiOutlineInbox />}
                  onClick={handleAllCourse}
                >
                  AllCourses
                </Button>
                 ) : null}
              </VStack>
            </Box>
            <chakra.a title="Choc Home Page" display="flex" alignItems="center">
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
              {user.role === "student" ? (
                <Button
                  variant={allCourse.variant}
                  colorScheme={allCourse.isClicked ? "brand" : null}
                  leftIcon={<BsFillCameraVideoFill />}
                  size="sm"
                  onClick={handleAllCourse}
                >
                  All Courses
                </Button>
              ) : null}
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
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
                <Avatar size="sm" name="Dan Abrahmov" src={src} />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    My Account
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem
                    onClick={() => {
                      navigate("/aboutUs");
                    }}
                  >
                    About Us
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/contactUs");
                    }}
                  >
                    Contact Us
                  </MenuItem>
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
