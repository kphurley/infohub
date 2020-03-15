import React, { useEffect } from 'react';

import { Container } from './components/Container';
import { Clock } from './components/Clock';
import { Date } from './components/Date';
import { Weather } from './components/Weather';

import useAppState from "./useAppState";
import useTimer from "./useTimer";

import sampleResponse from "./utilities/sample-response.json";

/*
action has the shape: 
{
  type: TYPE,
  data: {}
}
*/

import './App.css';

function App() {
  const [appState, dispatchAction] = useAppState();

  const updateWeatherAndImage = () => {
    dispatchAction({ type: "REQUEST" });

    fetch('http://localhost:4000/update').then((res) => {
      return res.json();
    }).then((response) => {
      dispatchAction({ type: "RESPONSE", data: response });
    }).catch((err) => {
      dispatchAction({ type: "ERROR", error: err });
    });
  }

  // Time ticker - send each second
  useTimer(() => dispatchAction({ type: "TICK" }), 1000);

  // Update ticker - send every 2 minutes
  useTimer(updateWeatherAndImage, 120000);

  // Update on mount
  useEffect(updateWeatherAndImage, []);

  const imageUrl = appState.imageUrls.urls ? appState.imageUrls.urls.full : "";
  
  return (
    // TODO - smoother transition on imageUrl
    <div className="App" style={{ backgroundImage: `url("${imageUrl}")` }}>
      <Container className="TopContainer">
        <Clock className="Clock" time={appState.time} />
        <Date className="Date" date={appState.date} />
      </Container>
      <Container className="MiddleContainer" />
      <Container className="BottomContainer">
        <Weather className="Weather" weather={appState.weather} />
      </Container>
    </div>
  );
}

export default App;
