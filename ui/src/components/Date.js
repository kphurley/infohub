import React from 'react';

export function Date({ className, date }) {
  const [dayOfWeek, monthDay, year] = date.split(",");
  return (
    <div className={ className }>
      <div className={ `${className}-day` }>{dayOfWeek}</div>
      <div className={ `${className}-date` }>{monthDay}</div>
    </div>
  );
}
