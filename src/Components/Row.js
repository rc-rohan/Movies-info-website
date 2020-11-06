import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";
import { truncateString } from "../utils/utils";
import "./CSS/Row.css";

function Row({ fetchURL, title }) {
  console.log("hello");

  const [movies, setMovies] = useState([]);

  console.log("fetchdata func ends here");

  useEffect(() => {
    console.log("enterd useEffect");
    const fetchData = async () => {
      const { data } = await axios.get(`${requests.baseTmdbURL}${fetchURL}`);
      console.log("data.results: ", data);
      setMovies(data.results);
      console.log("movies state: ", movies);
    };
    fetchData();
  }, [fetchURL]);
  console.log("movies state: ", movies);

  return (
    <div className="row">
      <div className="row__header">
        <h1 className="row__title">{title}</h1>
        <h5>View All</h5>
        {/* use React routerns here to link to other page and then fetch the data list there and pass the fetch link from here*/}
      </div>
      <div className="row__content">
        {movies.map((movie) => (
          <div key={movie.id} className="movieCard">
            <div className="image-area">
              <img
                className="movieCard__image"
                src={`${requests.baseImageURL}${movie.poster_path}`}
              />
              <div className="additionals">
                <span className='favourites__icon'>
                  <i className="bx bx-heart heartIcon"></i>
                  <i className="bx bxs-heart heartIcon"></i>
                </span>
              </div>
            </div>
            <div className="movieCard__name">
              {truncateString(
                movie.title ||
                  movie.original_title ||
                  movie.original_name ||
                  movie.name,
                32
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
