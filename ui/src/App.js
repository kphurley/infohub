import React from 'react';

import { Container } from './components/Container';
import { Clock } from './components/Clock';
import { Date } from './components/Date';
import { Weather } from './components/Weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="TopContainer">
        <Clock className="Clock" />
        <Date className="Date" />
      </Container>
      <Container className="MiddleContainer" />
      <Container className="BottomContainer">
        <Weather className="Weather" />
      </Container>
    </div>
  );
}

export default App;
