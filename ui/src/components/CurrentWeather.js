import React from 'react';

import iconMap from "../utilities/icon-map.json";

export function CurrentWeather({ className, data }) {
  const iconSrc = (data && data.icon) ? `icons/${iconMap[data.icon]}` : "";
  const temperature = data && data.temperature ? Math.round(data.temperature) : "";

  return (
    <div className={ className }>
      <div className={ `${className}-icon` }>
        <img src={iconSrc} />
      </div>
      <div className={ `${className}-temp` }>{temperature}&#176;</div>
    </div>
  );
}
