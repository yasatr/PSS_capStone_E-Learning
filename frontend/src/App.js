import "./App.css";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import MyCourses from "./Pages/Student/MyCourses";
import AllCourses from "./Pages/Student/AllCourses";
import CompletedCourses from "./Pages/Student/CompletedCourses";
import Profile from "./Pages/Teacher/Profile";
import SignUp from "./Components/Login/SignUp";
import SignIn from "./Components/Login/SignIn";
import MyCourse from "./Pages/Teacher/MyCourse";

function App() {
  // const [isLoggedIn,setLoggedIn] = useState(false);

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
          <Route
            exact
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route exact path="/student" Component={StudentDashboard} />
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
                </Routes>
              </>
            }
          />
        </Routes>
        {/* <Profile/> */}
      </Router>
    </ChakraProvider>
  );
}

export default App;
