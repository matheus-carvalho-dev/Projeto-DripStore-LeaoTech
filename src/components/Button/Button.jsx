import React from 'react';

const Button = ({text, style, customStyle, onClick, disabled}) => {
  return (
    <button className={style} style={customStyle} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;