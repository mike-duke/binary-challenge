import React from 'react';

export const Card = ({article}) => {
  const { urlToImage, title } = article
  return (
    <article className="card">
      <div className="image-container">
        <img src={urlToImage} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>author</p>
    </article>
  )
}