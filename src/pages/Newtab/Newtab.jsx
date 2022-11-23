import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';
import { Text } from '@chakra-ui/react'

const Newtab = () => {
  const [email, setEmail] = React.useState('');
  chrome.identity.getProfileUserInfo({ accountStatus: 'ANY' }, function (info) {
    console.log('ppppp', info)
    if (info.email) {
      setEmail(info.email)
    }
  });

  const text = `Hello${email ? `, ${email}` : ''}!`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text fontSize='20px' color='white'>
          Hello{email ? `, ${email}` : ''}!
        </Text>
        <Text fontSize='50px' color='tomato'>
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

export default Newtab;
