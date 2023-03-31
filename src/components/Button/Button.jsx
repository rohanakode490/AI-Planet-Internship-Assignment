import React from 'react';
import './Button.css';

const Button = ({title, type}) => {
  return (
    type ? (
      //To form
      <div></div>
    ):
    (
      <button className='btn'>
        Upload {title}
      </button>
    )
  )
  
}

export default Button