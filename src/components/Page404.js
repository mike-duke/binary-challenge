import React from 'react';

export const Page404 = (props) => {
  console.log(props)
  return (
    <div className='four-oh-four'>
      <h1>This page does not exist</h1>
      <a href="/">Return Home</a>
      <img src="https://media.giphy.com/media/uQkKavfX6TER2/giphy.gif" alt="Kirby hacking"/>
    </div>
  )
}