import React from 'react';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div className='four-oh-four'>
      <h1>This page does not exist</h1>
      <img src="https://media.giphy.com/media/uQkKavfX6TER2/giphy.gif" alt="Kirby hacking"/>
      <Link to="/">Return Home</Link>
    </div>
  )
}