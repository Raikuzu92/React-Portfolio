// src/App.js
import React from 'react';
import './App.css';
import Card from './components/Card';
import AboutMe from './components/AboutMe';
import PhotoCard from './components/PhotoCard';

const App = () => {
  const links = [
    { url: 'https://www.example.com', text: 'Example Link 1' },
    { url: 'https://www.example2.com', text: 'Example Link 2' },
    { url: 'https://www.example3.com', text: 'Example Link 3' },
    { url: 'https://www.example4.com', text: 'Example Link 4' }
  ];

  const photoCardInfo = {
    imageUrl: 'https://via.placeholder.com/300', // Replace with your photo URL
    text: 'This is a description of the photo.'
  };

  return (
    <div className="app">
      <Card links={links} />
      <AboutMe />
      <PhotoCard imageUrl={photoCardInfo.imageUrl} text={photoCardInfo.text} />
    </div>
  );
};

export default App;
