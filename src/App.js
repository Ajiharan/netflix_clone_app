import React from 'react';
import './App.css';
import Row from './rows/Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals}/>  
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
     
    </div>
  );
}

export default App;
