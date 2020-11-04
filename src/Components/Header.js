import React, { useEffect, useState } from "react";
import "./CSS/Header.css";
import axios from "axios";
import requests from "../requests";
import {Redirect} from 'react-router-dom'

const Header = () => {
  const [trending, setTrending] = useState([]);
  const [movie, setMovie] = useState();

  // todo:set interval for the repetative call of the trending movie
  let movieIndex = 1;
  setInterval(() => {
    // if(movieIndex<trending?.length){
    //   setMovie(trending[movieIndex])
    //   movieIndex++;
    //   console.log(movie,movieIndex)
    //   console.log(trending)
    // }else{
    //   movieIndex=0;
    //   setMovie(trending[movieIndex])
    // }
    // if(trending?.length)
    //   setMovie(trending[movieIndex])
      movieIndex++;
      console.log( movieIndex);
  }, 5000);

  const fetchData = async () => {
    const { data } = await axios.get(`${requests.baseTmdbURL}${requests.fetchTrending}`);
    setTrending(data.results);
    // unable to set the movies
    setMovie(trending[0]);
    // console.log(trending)
    // console.log(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () =>{
    // function to change the page when the user clicks button
  }

  return (
    <header
      className="banner"
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.9)) ,
            url(${requests.baseImageURL}${trending[0]?.backdrop_path})
            left top/cover`,
      }}
    >
      <div className="banner__content">
        <div>
          <h1 className="banner__name">{trending[0]?.original_title}</h1>
          <div className="banner__buttons">
            <button
              className="btn banner__details-page"
              onClick={() => handleClick()}
            >
              See Details
            </button>
            <button className="btn banner__trailer-link" onClick={() => {}}>
              Trailer
            </button>
          </div>
          <p className="banner__description">{trending[0]?.overview}</p>
        </div>
        <img
          className='banner__image'
          src={`${requests.baseImageURL}${trending[0]?.poster_path}`}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
