export const API_KEY = "26b98914bdfa3dc71c2d2c964644b132";
// fetchvideo details of the movie using youtube: https://api.themoviedb.org/3/movie/157336?api_key=26b98914bdfa3dc71c2d2c964644b132&append_to_response=videos,images

export const requests = {
  youtubeURL: `https://www.youtube.com/watch?v=`,
  baseImageURL: `https://image.tmdb.org/t/p/original/`,
  baseTmdbURL: `https://api.themoviedb.org/3`,
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}`,
  fetchPopularTVShows: `/tv/popular?api_key=${API_KEY}&page=1`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=false`,
  fetchPrimeVideos: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_networks=1024`,
  fetchDisneyHotstar: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_networks=3919`,

  // fetch specfic data on another page
  // fetchMultiQuery: `/search/multi?api_key=${API_KEY}&query=${query}`,
  // this 2 will be used in the specific pages
  // fetchMovieDetails: `/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos,images`,
  // fetchTVDetails: `/tv/${tv_id}?api_key=${API_KEY}&append_to_response=videos,images`,
};

