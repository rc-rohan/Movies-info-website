import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import "./Details.scss";
import { useParams } from "react-router-dom";
import { API_KEY, requests } from "../requests";
import { FavouritesContext } from "../Context/context";
import Row from '../Components/Row'
import ReactPlayer from "react-player/youtube";

function Details() {
  const { id, type } = useParams();

  const [favourite, setFavourite] = useContext(FavouritesContext);
  const [showDetails, setShowDetails] = useState();


  // todo coditional fetching with url
  // fetchMovieDetails: `/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos,images`,
  // fetchTVDetails: `/tv/${tv_id}?api_key=${API_KEY}&append_to_response=videos,images`,

  const fetchData = async () => {
    // todo add here condntional fetching of data
    const { data } = await Axios.get(
      `${requests.baseTmdbURL}/${type}/${id}?api_key=${API_KEY}&append_to_response=videos,images,similar`
    );
    setShowDetails(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div
      id="show"
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7),rgba(0,0,0,1))
                        no-repeat top left/100vw 130vh,
                      url(${requests.baseImageURL}${showDetails?.backdrop_path})
                        no-repeat top left/100vw 120vh`,
      }}
    >
      <header className="show__header">
        <h1 className="show__title">{showDetails?.title}</h1>
        <h5 className="show__tagline">{showDetails?.tagline}</h5>
        <p className="rating">
          {showDetails?.vote_average}/10
          <i className="bx bx-star ratingIcon"></i>
        </p>
      </header>
      <main className="mainContent">
        <section className="main-details">
          <div className="image-area">
            <img
              src={`${requests.baseImageURL}${showDetails?.poster_path}`}
              alt="poster"
            />
          </div>
          <div className="show__description">
            <div className="show__overview">
              <h1>Overview:</h1>
              <p>{showDetails?.overview}</p>
            </div>
            <div className="show__genres">
              {showDetails?.genres.map((genre) => (
                <span key={genre.id} className="genre__tagName">
                  <strong>{genre.name}</strong>
                </span>
              ))}
            </div>
            <div className="buttons">
              <button className="btn btn-light">Add Favourites</button>
              <button className="btn btn-light">Trailer</button>
            </div>
            <div className="additionalDetails">
              <span className="release-detials">
                <small className="status">
                  {showDetails?.status} ({showDetails?.release_date})
                </small>
              </span>
              <span className="show__homepage">
                <i className="bx bx-link-alt icon"></i>
                <a href={showDetails?.homepage}> Homepage</a>
              </span>
            </div>
          </div>
        </section>
        <section className="show__images">
          {showDetails?.images.backdrops.map((image, index) => (
            <span key={index} className="image-area">
              <img src={`${requests.baseImageURL}${image.file_path}`} alt="" />
            </span>
          ))}
        </section>
        <section className="show__trailer">
          <ReactPlayer
            width="720px"
            height="360px"
            controls
            url={`${requests.youtubeURL}${showDetails?.videos.results[0].key}`}
          />
        </section>
        <section className="similar__shows">
          {/*
            // todo add here row component and fetch data properly
          */}
          <Row
            title={`Similar Shows`}
            media_type={type}
            fetchURL={`/${type}/${id}${requests.fetchSimialrShow}`}
          />
        </section>
      </main>
    </div>
  );
}

export default Details;
