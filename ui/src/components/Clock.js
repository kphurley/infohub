import React from 'react';


export function Clock({ className, hour, minute, period }) {
  return (
    <div className={ className }>
      <span className={ `${className}-time` }>{`${hour}:${minute}`}</span>
      <span className={ `${className}-period` }>{period}</span>
    </div>
  );
}
