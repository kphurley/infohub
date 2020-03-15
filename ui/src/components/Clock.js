import React from 'react';

export function Clock({ className, time }) {
  const [clockTime, timePeriod] = time.split(" ");
  const [hour, minutes, _] = clockTime.split(":");
  return (
    <div className={ className }>
      <span className={ `${className}-time` }>{ `${hour}:${minutes}` }</span>
      <span className={ `${className}-period` }>{ timePeriod }</span>
    </div>
  );
}
