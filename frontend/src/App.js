import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Flex } from '@chakra-ui/react';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Flex>
      <Sidebar/>
      <Home/>
      </Flex>
      
    </div>
  );
}

export default App;
