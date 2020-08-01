import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // async function fetchData(){
    //     const request=await axios.get(fetchUrl);
    //     // console.log(request.data.results);
    //     setMovies(request.data.results);
    //     return request;

    // }

    // fetchData();

    axios
      .get(fetchUrl)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchUrl]);

  // console.table(movies);
  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
