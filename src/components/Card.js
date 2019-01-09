import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({article}) => {
  const { urlToImage, title, author, url } = article
  return (
    <article className="card" onClick={() => window.open(url)}>
      <div className="image-container" style={{backgroundImage: `URL(${urlToImage})`}}>
      </div>
      <h3>{title}</h3>
      <p>By {author}</p>
    </article>
  )
}

Card.propTypes = {
  article: PropTypes.object.isRequired
}