import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { requests } from "../requests";
import { getFavourites, truncateString } from "../utils/utils";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../Context/context";
import "./CSS/Row.scss";

function Row({ fetchURL, title, media_type }) {
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useContext(FavouritesContext);

  // todo add useEffect for favourites change for the addition to the lcalstorage

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(`${requests.baseTmdbURL}${fetchURL}`);
      setMovies(data.results);
    };
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <div className="row__header">
        <h1 className="row__title">{title}</h1>
        <h5>View All</h5>
        {/* use React routerns here to link to other page and then fetch the data list there and pass the fetch link from here*/}
      </div>
      <div className="row__content">
        {movies.map((movie) => (
          <div className="show__details">
            <span
              className="favourites"
              onClick={() => {
                if (getFavourites(favourite, movie.id) === -1) {
                  setFavourite([
                    ...favourite,
                    {
                      id: movie?.id,
                      poster_path: movie?.poster_path,
                      title: movie?.title,
                      vote_average: movie?.vote_average,
                    },
                  ]);
                } else {
                  setFavourite(favourite.filter((el) => el.id !== movie.id));
                }
              }}
            >
              {favourite.some((el) => el.id === movie?.id) === true ? (
                <i className="bx bxs-heart heartIcon"></i>
              ) : (
                <i className="bx bx-heart heartIcon "></i>
              )}
            </span>

            <Link
              to={`/details/${movie.media_type || media_type}/${movie.id}`}
              key={movie.id}
              className="movieCard"
            >
              <div className="image-area">
                <img
                  className="movieCard__image"
                  src={`${requests.baseImageURL}${movie.poster_path}`}
                  alt="poster"
                />
                <div>
                  <span className="rating">
                    {movie?.vote_average}
                    <i className="bx bx-star ratingIcon"></i>
                  </span>
                </div>
              </div>
              <strong className="movieCard__name">
                {truncateString(
                  movie.title ||
                    movie.original_title ||
                    movie.original_name ||
                    movie.name,
                  40
                )}
              </strong>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
