import React from 'react';

export function Clock({ className }) {
  return (
    <div className={ className }>
      <span className={ `${className}-time` }>10:30</span>
      <span className={ `${className}-period` }>PM</span>
    </div>
  );
}
