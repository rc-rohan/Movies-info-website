const API_KEY = "26b98914bdfa3dc71c2d2c964644b132";

// fetchvideo details of the movie using youtube: https://api.themoviedb.org/3/movie/157336?api_key=26b98914bdfa3dc71c2d2c964644b132&append_to_response=videos


const requests = {
  imageURL: `https://image.tmdb.org/t/p/original/`,
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,

};

export default requests;
