import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
// import styled from "styled-components";
import "./movieInfoComponent.css";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className="container">
      {movieInfo ? (
        <>
          <div className="headerInfoComponent">
            <div className="coverImage">
              <img src={movieInfo?.Poster} alt={movieInfo?.Title} />
            </div>
            <div className="infoColumn">
              <span className="movieName">
                {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
              </span>
              <span className="movieInfo">
                IMDB Rating: <span>{movieInfo?.imdbRating}</span>
              </span>
              <span className="movieInfo">
                Year: <span>{movieInfo?.Year}</span>
              </span>
              <span className="movieInfo">
                Language: <span>{movieInfo?.Language}</span>
              </span>
              <span className="movieInfo">
                Rated: <span>{movieInfo?.Rated}</span>
              </span>
              <span className="movieInfo">
                Released: <span>{movieInfo?.Released}</span>
              </span>
              <span className="movieInfo">
                Runtime: <span>{movieInfo?.Runtime}</span>
              </span>
              <span className="movieInfo">
                Genre: <span>{movieInfo?.Genre}</span>
              </span>
              <span className="movieInfo">
                Director: <span>{movieInfo?.Director}</span>
              </span>
              <span className="movieInfo">
                Actors: <span>{movieInfo?.Actors}</span>
              </span>
              <span className="movieInfo">
                Plot: <span>{movieInfo?.Plot}</span>
              </span>
            </div>
            <span className="close" onClick={() => props.onMovieSelect()}>
              X
            </span>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default MovieInfoComponent;
