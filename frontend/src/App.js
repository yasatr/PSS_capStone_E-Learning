import "./App.css";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import {
  ChakraProvider,
  extendTheme,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import MyCourses from "./Pages/Student/MyCourses";
import AllCourses from "./Pages/Student/AllCourses";
import CompletedCourses from "./Pages/Student/CompletedCourses";
import Profile from "./Pages/Teacher/Profile";
import SignUp from "./Components/Login/SignUp";
import SignIn from "./Components/Login/SignIn";
import MyCourse from "./Pages/Teacher/MyCourse";
import Welcome from "./Pages/LandingPage/Welcome";

import TeacherDashboard from "./Pages/Teacher/TeacherDashboard";
import DataProvider from "./MyContext";
import AboutUs from "./Pages/LandingPage/AboutUs";
import ContactUs from "./Pages/LandingPage/ContactUs";
import ProtectedRoute from "./ProtectedRoute";
import Footer from "./Components/Footer/Footer";

function App() {
  const colors = {
    brand: {
      50: "#ecefff",
      100: "#cbceeb",
      200: "#a9aed6",
      300: "#888ec5",
      400: "#666db3",
      500: "#4d5499",
      600: "#3c4178",
      700: "#2a2f57",
      800: "#181c37",
      900: "#080819",
    },
  };
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };

  const theme = extendTheme({ colors, config });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/signin" Component={SignIn} />
          <Route exact path="/signup" Component={SignUp} />
          <Route exact path="/" Component={Welcome} />
          <Route
            exact
            path="/*"
            element={
              <>
                <DataProvider>
                  <Navbar />
                  <Routes>
                    <Route element={<ProtectedRoute />}>
                      <Route
                        exact
                        path="/student"
                        Component={StudentDashboard}
                      />
                      <Route
                        exact
                        path="/student/myCourses"
                        Component={MyCourses}
                      />
                      <Route
                        exact
                        path="/student/allCourses"
                        Component={AllCourses}
                      />
                      <Route
                        exact
                        path="/student/completedCourses"
                        Component={CompletedCourses}
                      />
                      <Route exact path="/profile" Component={Profile} />
                      <Route
                        exact
                        path="/teacher/myCourse"
                        Component={MyCourse}
                      />
                      <Route
                        exact
                        path="/teacher"
                        Component={TeacherDashboard}
                      />
                      <Route exact path="/aboutUs" Component={AboutUs} />
                      <Route exact path="/contactUs" Component={ContactUs} />
                    </Route>
                  </Routes>
                    <Footer  mx="auto" />
                </DataProvider>
              </>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
