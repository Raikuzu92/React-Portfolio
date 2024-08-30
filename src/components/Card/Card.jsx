import React from 'react';
import './Card.css';

const Card = ({ links }) => {
  return (
    <div className="card">
      {links.map((link, index) => (
        <a key={index} href={link.url} className="card-link">
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Card;