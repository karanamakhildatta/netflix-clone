import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific conditions/variable
  useEffect(() => {
    /* if [], run once when the row loads, and dont run again.*/
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  return (
    <>
      <div className="row">
        <h1> {props.title} </h1>{" "}
        <div className="row__posters">
          {" "}
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${
                props.isLargeRow && "row__posterLarge"
              }`}
              src={`${base_url}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Row;
