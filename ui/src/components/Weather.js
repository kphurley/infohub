import React from 'react';

import { CurrentWeather } from './CurrentWeather';
import { ForecastedWeather } from './ForecastedWeather';

export function Weather({ className, weather }) {
  return (
    <div className={ className }>
      <CurrentWeather className={ `${className}-current` } weather={weather.current} />
      <ForecastedWeather className={ `${className}-forecast` } weather={weather.daily} />
    </div>
  );
}
