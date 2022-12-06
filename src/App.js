
import './App.css';
import React from 'react';
import Nav from './components/Nav'
import Reviews from './components/Reviews';
import Ratings from './components/Ratings';
import WebsiteVisitors from './components/WebsiteVisitors';
import Sentiment from './components/Sentiment';


function App() {
  return (
    <div className="App">
      <div className='app1'>
      <Nav />
      </div>
      <div className='app2'>
        <div className='elements'>
          <Reviews />
          <Ratings />
          <Sentiment />
          <WebsiteVisitors /></div>
      
      </div>
    </div>

  );
}

export default App;
