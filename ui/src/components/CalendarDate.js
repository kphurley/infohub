import React from 'react';

export function CalendarDate({ className, dayOfWeek, monthAndDay }) {
  return (
    <div className={ className }>
      <div className={ `${className}-day` }>{ dayOfWeek }</div>
      <div className={ `${className}-date` }>{ monthAndDay }</div>
    </div>
  );
}
