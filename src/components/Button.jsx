import React from 'react';

export default function Button({ text, handleClick, disabled }) {
  return (
    <a
      href="#"
      className={`f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4 ${disabled ? 'o-50' : ''}`}
      onClick={disabled ? null : handleClick}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }}
    >
      <span className="pl1">{text}</span>
    </a>
  );
}
