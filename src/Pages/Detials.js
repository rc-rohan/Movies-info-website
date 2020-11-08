import React,{useEffect} from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import {API_KEY,requests} from '../requests'

function MovieDetials({match}) {
  const data = useParams();
  console.log(data);
  const id = match.params.id;
  console.log(match);

  // fetchMovieDetails: `/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos,images`,

  const fetchData = async() =>{
    const { data } = await Axios.get(
      `${requests.baseTmdbURL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`
    );
    console.log(data);
  }
    
    useEffect(() => {
      fetchData();
    }, [id]);
  return (
    <div>
      <h1>Fetching Movie {id} details</h1>
    </div>
  );
}

export default MovieDetials
