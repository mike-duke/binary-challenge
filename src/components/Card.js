import PropTypes from 'prop-types';
import React from 'react';

export const Card = ({article}) => {
  const { urlToImage, title, author, url, source } = article
  return (
    <article className="card" onClick={() => window.open(url)}>
      <div className="image-container" style={{backgroundImage: `URL(${urlToImage})`}}>
      </div>
      <h3>{title}</h3>
      <p>By {author}</p>
      <p>For <span>{source.name}</span></p>
    </article>
  )
}

Card.propTypes = {
  article: PropTypes.object.isRequired
}