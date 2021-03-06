import React, { useEffect, useState } from "react";
import "./CSS/Header.scss";
import Axios from "axios";
import {requests} from "../requests";
import { Link } from "react-router-dom";

const Header = () => {
  const [trending, setTrending] = useState([]);
  const [banner, setBanner] = useState();
  // todo add a loader
  // const [isLoading, setIsLoading] = useState(false);


  // todo:set interval for the repetative call of the trending movie
  // let movieIndex = 1;

  // setIsLoading(true)


  // todo Shift this function into utils as we will be using this function everywhere
  const fetchData = async () => {
    const { data } = await Axios.get(
      `${requests.baseTmdbURL}${requests.fetchTrending}`
    );
    // setIsLoading(false);
    setTrending(data.results);
    setBanner(trending[0]);
    console.log("banner",banner);
  };

  useEffect(() => {
    fetchData();
  }, []);



  // useEffect(() => {}, [banner]);

  // const API_KEY = "26b98914bdfa3dc71c2d2c964644b132";
  // async function fetchMovie (movie_id){
  //   const fetchMovieDetails= `/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos,images`;
  //     const {data} = axios.get(`${requests.baseTmdbURL}${fetchMovieDetails}`)
  //     console.log(data.results);
  //     const moviekey = data?.results?.videos?.results[0].key
  //     console.log(moviekey);
  //     return moviekey
  //   }

  const getBannerTrailer = (movie_id) => {
    console.log(movie_id);
  };

  // loader compoenent
  // if(iLoading){
  //   return(
  //     <Loader/>
  //   )
  // }

  return (
    <header
      className="banner"
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7),rgba(0,0,0,1)) ,
            url(${requests.baseImageURL}${trending[0]?.backdrop_path})
            left top/cover`,
      }}
    >
      <div className="banner__content">
        <div>
          <h1 className="banner__name">{trending[0]?.original_title}</h1>
          <div className="banner__buttons">
            <Link
              to={`/details/movie/${trending[0]?.id}`}
              className="btn "
            >
              See Details
            </Link>
            <Link
              to={{
                pathname: "/search",
                state: {
                  id: trending[0]?.id,
                },
              }}
              className="btn "
              // onClick={() => {
              //   getBannerTrailer(trending[0]?.id);
              // }}
            >
              Trailer
            </Link>
          </div>
          <p className="banner__description">{trending[0]?.overview}</p>
        </div>
        <img
          className="banner__image"
          src={`${requests.baseImageURL}${trending[0]?.poster_path}`}
          alt="poster"
        />
      </div>
    </header>
  );
};

export default Header;
