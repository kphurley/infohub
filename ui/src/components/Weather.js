import React from 'react';

import { CurrentWeather } from './CurrentWeather';
import { ForecastedWeather } from './ForecastedWeather';

export function Weather({ className }) {
  return (
    <div className={ className }>
      <CurrentWeather className={ `${className}-current` } />
      <ForecastedWeather className={ `${className}-forecast` } />
    </div>
  );
}
