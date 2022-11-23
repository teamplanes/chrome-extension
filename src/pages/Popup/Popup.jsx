import React from 'react';
import './Popup.css';
import { Text } from '@chakra-ui/react';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Text fontSize="10px" color="white">
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.
        </Text>
        <Text fontSize="20px" color="tomato">
          PLANES
        </Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
