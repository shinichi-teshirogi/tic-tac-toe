import React from 'react';
import './App.css';
import { MainView } from './views/MainView';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <MainView />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
