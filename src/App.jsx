import React, { useState } from "react";
import Axios from "axios";

import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";

import "./index.css";

// API key for the OMDb API
export const API_KEY = "89378614";

function App() {
  // State variables used in the app
  const [searchQuery, setSearchQuery] = useState(""); // stores the user's search query
  const [movieList, setMovieList] = useState([]); // stores the list of movies returned by the API
  const [selectedMovie, onMovieSelect] = useState(); // stores the currently selected movie
  // const [timeoutId, updateTimeoutId] = useState(); // stores the ID of the timeout used to delay API requests

  // Function to fetch data from the OMDb API
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    setMovieList(response.data.Search || []);
  };

  // Event handler for when the user types in the search input
  const onTextChange = (e) => {
    onMovieSelect(""); // deselect any previously selected movie
    //   // clearTimeout(timeoutId); // clear any existing timeout
    setSearchQuery(e.target.value); // update the search query in state
    if (e.key === "Enter") {
      fetchData(e.target.value);
      setSearchQuery("");
    } else {
      setMovieList([]); // clear the movie list
    }
  };

  // Render the app
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="appName">
            <img src="data:image/png;base64,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" />
            React Movie
          </div>
          <div className="searchBox">
            <img src="/react-movie-app/search-icon.svg" />
            <input
              placeholder="Search Movie"
              value={searchQuery}
              onChange={onTextChange}
              onKeyDown={onTextChange}
            />
          </div>
        </div>

        {selectedMovie && (
          <MovieInfoComponent
            selectedMovie={selectedMovie}
            onMovieSelect={onMovieSelect}
          />
        )}

        <div className="movieListContainer">
          {movieList?.length ? (
            movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
            ))
          ) : (
            <div className="placeholder">Movie not found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
