import "./App.css";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import { ChakraProvider, extendTheme} from '@chakra-ui/react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar';
import MyCourses from "./Pages/Student/MyCourses";
import AllCourses from "./Pages/Student/AllCourses";
import CompletedCourses from "./Pages/Student/CompletedCourses";
import TeacherDashboard from "./Pages/Teacher/TeacherDashboard";
import Profile from "./Pages/Teacher/Profile";
import Loader from "./Components/Loader/Loader";

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
      {/* <Navbar/> */}
      {/* <Profile/> */}
        <Routes>
          <Route exact path="/student" Component={StudentDashboard} />
          {/* <Route exact path="/student/myCourses" Component={MyCourses} />
          <Route exact path="/student/allCourses" Component={AllCourses} /> */}
          {/* <Route
            exact
            path="/student/completedCourses"
            Component={CompletedCourses}
          /> */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
