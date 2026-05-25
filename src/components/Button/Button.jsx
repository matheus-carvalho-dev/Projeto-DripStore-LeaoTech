import React from 'react';

const Button = ({text,style,customStyle,onClick}) => {
  return (
    <button className={`${style}`} style={customStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;