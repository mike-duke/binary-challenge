import React from 'react';

export const Card = ({article}) => {
  const { urlToImage, title, author } = article
  return (
    <article className="card">
      <div className="image-container" style={{backgroundImage: `URL(${urlToImage})`}}>
      </div>
      <h3>{title}</h3>
      <p>By {author}</p>
    </article>
  )
}