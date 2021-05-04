import React from 'react';

import ClearNight from "../icons/clear-night.svg";
import Cloudy from "../icons/cloudy.svg";
import Sunny from "../icons/sunny.svg";

export function CurrentWeather({ className, weather }) {
  const iconPropToIcon = {
    'clear-day': Sunny,
    'clear-night': ClearNight, 
    rain: 'icon',
    snow: 'icon',
    sleet: 'icon',
    wind: 'icon',
    fog: 'icon',
    cloudy: Cloudy,
    'partly-cloudy-day': 'icon',
    'partly-cloudy-night': 'icon'
  }

  const Icon = Sunny;

  return (
    <div className={ className }>
      <div className={ `${className}-wind` }>6 mph NE</div>
      <div className={ `${className}-sunrise` }>5:15</div>
      <span className={ `${className}-temp` }>{ weather.temperature }</span>
      <span className={ `${className}-icon` }><Icon width={100} height={100} fill={"none"} stroke={"#000000"} strokeWidth={1} /></span>
    </div>
  );
}
