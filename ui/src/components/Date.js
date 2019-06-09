import React from 'react';

export function Date({ className }) {
  return (
    <div className={ className }>
      <div className={ `${className}-day` }>Saturday</div>
      <div className={ `${className}-date` }>June 8</div>
    </div>
  );
}
