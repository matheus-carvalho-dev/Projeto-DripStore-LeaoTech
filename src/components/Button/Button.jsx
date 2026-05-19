import React from 'react';

const Button = ({text,style,customStyle}) => {
  return (
    <button className={`${style}`} style={customStyle}>
      {text}
    </button>
  );
};

export default Button;