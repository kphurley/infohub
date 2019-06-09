import React from 'react';

export function CurrentWeather({ className }) {
  return (
    <div className={ className }>
      <div className={ `${className}-wind` }>6 mph NE</div>
      <div className={ `${className}-sunrise` }>5:15</div>
      <span className={ `${className}-temp` }>63&nbsp;</span>
      <span className={ `${className}-icon` }>Icon</span>
    </div>
  );
}
