import React from 'react';

import iconMap from "../utilities/icon-map.json";

/*
each element of data:
{
  "icon": "cloudy",
  "precipProbability": 0.27,
  "precipType": "rain",
  "summary": "Overcast throughout the day.",
  "temperatureHigh": 38.79,
  "temperatureLow": 31.27
}
*/

function ForecastedDay(data) {
  const iconSrc = (data && data.icon) ? `icons/${iconMap[data.icon]}` : "";
  
  return (
    <div>
      <div><img src={iconSrc} /></div>
      <div>{`HI: ${Math.round(data.temperatureHigh)}`}</div>
      <div>{`LO: ${Math.round(data.temperatureLow)}`}</div>
    </div>
  )
}

export function ForecastedWeather({ className, days = [] }) {
  return (
    <div className={ className }>
      {
        days
          .slice(0, 4)
          .map((dayData, idx) => <ForecastedDay key={`day-${idx}`} data={dayData} />)
      }
    </div>
  );
}
