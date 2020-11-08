import React from 'react'
import Header from "../Components/Header";
import Row from "../Components/Row";
import {requests} from "../requests";


const Home=()=> {
  return (
    <div>
      <Header />
      {/* 1. Header navgationa menu either hamburger menu or navbar */}
      {/* 2. Trending mvoies sliders showng buttons and link to visit the movie */}
      {/* 4. YouTube Trailers:In theaters trailers of the movie list */}
      <Row
        title="Trending Movies this Week"
        fetchURL={requests.fetchTrending}
        />
      <Row
        media_type='tv'
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        />
      <Row
        media_type='tv'
        title="Prime Videos"
        fetchURL={requests.fetchPrimeVideos}
      />
    </div>
  );
}

export default Home
