import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure correct import
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';
import AboutMe from './components/AboutMe/AboutMe';
import PhotoCard from './components/PhotoCard/PhotoCard';

const App = () => {
  const links = [
    { url: 'https://www.example.com', text: 'Example Link 1' },
    { url: 'https://www.example2.com', text: 'Example Link 2' },
    { url: 'https://www.example3.com', text: 'Example Link 3' },
    { url: 'https://www.example4.com', text: 'Example Link 4' }
  ];

  const photoCardInfo = {
    imageUrl: 'https://via.placeholder.com/300',
    text: 'This is a description of the photo.'
  };

  return (
    <Router> {/* Wrap your app with Router */}
      <div className="app">
        <Navbar />
        <Routes> {/* Define your routes */}
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<PhotoCard imageUrl={photoCardInfo.imageUrl} text={photoCardInfo.text} />} />
          <Route path="/contact" element={<Card links={links} />} />
          {/* Add additional routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;