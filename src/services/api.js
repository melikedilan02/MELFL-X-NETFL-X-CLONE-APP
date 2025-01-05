import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY'; // TMDB'den alacağınız API anahtarını buraya yazın
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = {
  fetchTrending: () => 
    axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`),
  fetchNetflixOriginals: () =>
    axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`),
  fetchTopRated: () =>
    axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`),
}; 