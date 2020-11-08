import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { API_KEY, requests } from "../requests";
import "./Details.css";

function Details({ match }) {
  // const data = useParams();
  // console.log(data);
  const id = match.params.id;
  const type = match.params.type;
  // console.log(match);

  const [showDetails, setShowDetails] = useState();

  // todo coditional fetching with url
  // fetchMovieDetails: `/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos,images`,
  // fetchTVDetails: `/tv/${tv_id}?api_key=${API_KEY}&append_to_response=videos,images`,

  const fetchData = async () => {
    // todo add here condntional fetching of data
    const { data } = await Axios.get(
      `${requests.baseTmdbURL}/${type}/${id}?api_key=${API_KEY}&append_to_response=videos,images,similar`
    );
    console.log(data);
    setShowDetails(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div
      className="details"
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7),rgba(0,0,0,1))
                        no-repeat top left/100vw 130vh,
                      url(${requests.baseImageURL}${showDetails?.backdrop_path})
                        no-repeat top left/100vw 120vh`,
        // backgroundSize: `100vw 100vh`
      }}
    >
      <header className="show__banner">
        <h1 className="title">{showDetails?.title}</h1>
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
              <h1>Overview</h1>
              <p>{showDetails?.overview}</p>
            </div>
            <div className="show__genres">
              {showDetails?.genres.map((genre) => (
                <span className="genre__tagName">
                  <strong>{genre.name}</strong>
                </span>
              ))}
            </div>
            <div className="buttons">
              <button className="btn btn-light">Add Favourites</button>
              <button className="btn btn-light">Trailer</button>
            </div>
            <div className="additional_details">
              <span className="release-detials">
                <small className="status">{showDetails?.status} </small>
                <small>Release: </small>
                <small>{showDetails?.release_date}</small>
              </span>
              <a className="show__homepage" href={showDetails?.homepage}>
                Homepage
              </a>
            </div>
          </div>
        </section>
        <section className="imagesCollage">
          {/* show all the collections of images here */}
        </section>
        <section className="youtubeTrailer">
          {/* get the youtube trailer using react youtube */}
        </section>
        <section className="similar__shows">
          {/* get the row component here */}
        </section>
      </main>
    </div>
  );
}

export default Details;
