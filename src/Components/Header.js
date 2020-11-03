import React, { useEffect, useState } from "react";
import "./CSS/Header.css";
import axios from "axios";
import requests from "../requests";

const Header = () => {
  const [trending, setTrending] = useState([]);
  const [movie, setMovie] = useState();

  // todo:set interval for the repetative call of the trending movie
  // let movieIndex = 1;
  // setInterval(() => {
  //   if(movieIndex<trending.length){
  //     setMovie(trending[movieIndex])
  //     movieIndex++;
  //     console.log(movie,movieIndex)
  //   }else{
  //     movieIndex=0;
  //     setMovie(trending[movieIndex])
  //   }
  // }, 5000);

  const fetchData = async () => {
    const { data } = await axios.get(requests.fetchTrending);
    setTrending(data.results);
    // unable to set the movies
    setMovie(trending[0]);
    console.log(trending);
    console.log(movie);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        background: `linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.9)),
            url(${requests.imageURL}${trending[0]?.backdrop_path})
            left top/cover`,
      }}
    >
      <h1 className="banner__name">{trending[0]?.original_title}</h1>
      
    <p className="banner__description">{trending[0]?.overview}</p>
    </header>
  );
};

export default Header;
