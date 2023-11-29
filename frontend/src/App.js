
import { ChakraProvider, Heading} from '@chakra-ui/react';
import './App.css';
import CourseCard from './Components/Teacher/CourseCard';


function App() {
  return (
    <ChakraProvider>
      <Heading>Hello</Heading>
    </ChakraProvider>
  );
}

export default App;
