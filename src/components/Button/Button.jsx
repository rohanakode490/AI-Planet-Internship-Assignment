import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({type}) => {
  return (
    type ? (
      //Submit form
      <Link to='/' className='btn'>
        Upload Submission
      </Link>
    ):
    (
      //To form
      <Link to='/form' className='btn'>
        Upload Submission
      </Link>
    )
  )
  
}

export default Button