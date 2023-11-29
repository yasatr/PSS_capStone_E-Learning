
import { ChakraProvider, Heading, extendTheme} from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import AllCourses from './Components/Student/AllCourses';
import CourseCard from './Components/Teacher/CourseCard';

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
      900: "#080819"
    }
  };
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false
  };
  
  const theme = extendTheme({ colors, config });
  
  return (

    <ChakraProvider theme={theme}>
      <Navbar/>
      <Heading>Hello</Heading>
    </ChakraProvider>
  );
}

export default App;


