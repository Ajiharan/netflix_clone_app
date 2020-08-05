import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

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
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log("Moview Name", movie?.name);
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log("URL", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            movie?.poster_path &&
            movie?.backdrop_path && (
              <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie?.name || "movie"}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
