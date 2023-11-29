
import { ChakraProvider, Heading} from '@chakra-ui/react';
import './App.css';
import AddCourse from './Components/Teacher/AddCourse';

function App() {
  return (
    <ChakraProvider>
      <Heading>Hello</Heading>
    </ChakraProvider>
  );
}

export default App;
