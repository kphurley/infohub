import React, { useEffect, useReducer, useState } from 'react';
import useInterval from '@use-it/interval';

import _ from 'lodash';
import axios from 'axios';

import { Container } from './components/Container';
import { Clock } from './components/Clock';
import { CalendarDate } from './components/CalendarDate';
import { Weather } from './components/Weather';

import processUpdate from './reducers/processUpdate';

import './App.css';

const EVERY_SECOND = 1000;
const EVERY_TWO_MINUTES = 120000;

function App() {
  const initialAppData = {
    imageUrls: {
      urls: {
        full: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515'
      }
    },
    weather: {
      current: {},
      daily: {}
    }
  };

  const [date, setDate] = useState(new Date());
  const [appData, dispatch] = useReducer(processUpdate, initialAppData);

  useInterval(() => setDate(new Date(), EVERY_SECOND))

  const [timeOfDay, period] = date.toLocaleTimeString().split(" ");
  const [hour, minute] = timeOfDay.split(":")
  const time = { hour, minute, period };

  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', dateOptions);
  const [dayOfWeek, monthAndDay] = dateString.split(", ");

  const performUpdate = () => {
    axios.get('http://localhost:4000/update').then((res) => {
      dispatch({ type: 'update', data: res.data })
    });
  }

  // Perform update on mount
  useEffect(performUpdate, []);
  // And again every two minutes
  useInterval(performUpdate, EVERY_TWO_MINUTES);

  return (
    <div className="App" style={ { backgroundImage: `url(${_.get(appData, "imageUrls.urls.full")}` } }>
      <Container className="TopContainer Text-White Text-DropShadow">
        <Clock className="Clock" { ...time } />
        <CalendarDate className="Date" dayOfWeek={ dayOfWeek } monthAndDay={ monthAndDay } />
      </Container>
      <Container className="MiddleContainer" />
      <Container className="BottomContainer">
        <Weather className="Weather" weather={ _.get(appData, "weather") } />
      </Container>
    </div>
  );
}

export default App;
