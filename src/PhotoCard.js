import React from 'react';
import './PhotoCard.css';

const PhotoCard = ({ imageUrl, text }) => {
  return (
    <div className="photo-card">
      <img src={imageUrl} alt="Photo" className="photo-card-image" />
      <p className="photo-card-text">{text}</p>
    </div>
  );
};

export default PhotoCard;