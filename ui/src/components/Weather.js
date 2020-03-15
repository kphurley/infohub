import React from 'react';

import { CurrentWeather } from './CurrentWeather';
import { ForecastedWeather } from './ForecastedWeather';

export function Weather({ className, weather }) {
  return (
    <div className={ className }>
      <CurrentWeather className={ `${className}-current` } data={weather.current} />
      <ForecastedWeather className={ `${className}-forecast` } days={weather.daily} />
    </div>
  );
}
