import "./App.css";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MyCourses from "./Pages/Student/MyCourses";
import AllCourses from "./Pages/Student/AllCourses";
import CompletedCourses from "./Pages/Student/CompletedCourses";
import Profile from "./Pages/Teacher/Profile";
import SignUp from "./Components/Login/SignUp";
import SignIn from "./Components/Login/SignIn";
import Forgot from "./Components/Login/Forgot";
import MyCourse from "./Pages/Teacher/MyCourse";
import Welcome from "./Pages/LandingPage/Welcome";

import TeacherDashboard from "./Pages/Teacher/TeacherDashboard";
import AboutUs from "./Pages/LandingPage/AboutUs";
import ContactUs from "./Pages/LandingPage/ContactUs";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "./Components/Loader/Loader";
import Layout from "./Components/Layout/Layout";
import Content from "./Pages/Teacher/Content";
import ErrorPage from "./Components/Styles/ErrorPage";
import CourseContent from "./Pages/Student/CourseContent";

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/error" element={<ErrorPage />} />

          <Route
            path="/*"
            element={
              <Loader>
                <>
                  <Layout hideNavbar={false} hideFooter={false}>
                    <Routes>
                      <Route
                        path="student"
                        element={
                          <ProtectedRoute
                            path="student"
                            element={<StudentDashboard />}
                          />
                        }
                      />
                      <Route
                        path="student/myCourses"
                        element={
                          <ProtectedRoute
                            path="student"
                            element={<MyCourses />}
                          />
                        }
                      />
                      <Route
                        path="student/allCourses"
                        element={
                          <ProtectedRoute
                            path="student"
                            element={<AllCourses />}
                          />
                        }
                      />
                      <Route
                        path="student/completedCourses"
                        element={
                          <ProtectedRoute
                            path="student"
                            element={<CompletedCourses />}
                          />
                        }
                      />
                      <Route
                    path="student/content"
                    element={
                      <ProtectedRoute path="student" element={<CourseContent/>} />
                    }
                  />
                      <Route
                        path="/profile"
                        element={
                          <ProtectedRoute
                            path="/profile"
                            element={<Profile />}
                          />
                        }
                      />
                      <Route
                        path="teacher"
                        element={
                          <ProtectedRoute
                            path="teacher"
                            element={<TeacherDashboard />}
                          />
                        }
                      />
                      <Route
                        path="teacher/myCourse"
                        element={
                          <ProtectedRoute
                            path="teacher"
                            element={<MyCourse />}
                          />
                        }
                      />
                      {/* <Route
                        exact
                        path="/teacher/myCourse"
                        render={()=>(
                         
                            <Layout hideNavbar={true} hideFooter={true}>
                              <MyCourse />
                            </Layout>
                         
                        )}
                      /> */}
                      <Route
                        path="/aboutUs"
                        element={
                          <ProtectedRoute
                            path="/aboutUs"
                            element={<AboutUs />}
                          />
                        }
                      />
                      <Route
                        path="/contactUs"
                        element={
                          <ProtectedRoute
                            path="/contactUs"
                            element={<ContactUs />}
                          />
                        }
                      />
                      <Route
                        path="/content"
                        element={
                          <ProtectedRoute
                            path="teacher"
                            element={<Content />}
                          />
                        }
                      />
                      <Route path="*" element={<Navigate to="/error" />} />
                    </Routes>
                  </Layout>
                </>
              </Loader>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
