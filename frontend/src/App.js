
import { ChakraBaseProvider, Heading} from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraBaseProvider>
      <Heading>Hello</Heading>
    </ChakraBaseProvider>
  );
}

export default App;
