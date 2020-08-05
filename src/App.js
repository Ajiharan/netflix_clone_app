import React from "react";
import "./App.css";
import Row from "./rows/Row";
import request from "./request";
import Banner from "./banner/Banner";
import NavBar from "./nav/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Commedy Movies" fetchUrl={request.fetchCommedyMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDOcumentaries} />
    </div>
  );
}

export default App;
