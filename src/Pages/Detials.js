import React,{useEffect} from 'react'

function MovieDetials({match}) {
  const id = match.params.id;
  console.log(match);
  useEffect(() => {
    
  }, [id])
  return (
    <div>
      <h1>Fetching Movie {id} details</h1>
    </div>
  );
}

export default MovieDetials
