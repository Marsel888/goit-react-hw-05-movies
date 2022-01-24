const API_KEY = 'e68a83aa2e3f030b64500e50b79d8476'
const BASE_URL = 'https://api.themoviedb.org/3/'

async function Api(url = '') {
  const response = await fetch(url)
  return response.ok ? await response.json() : Promise.reject(new Error('NOT'))
}
export function getTrending() {
  return Api(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
}
export function getIdMovies(moviesId) {
  return Api(`${BASE_URL}/movie/${moviesId}?api_key=${API_KEY}`)
  // https://api.themoviedb.org/3/movie/157336?api_key={api_key}
}
export function getCast(moviesId) {
  return Api(
    `${BASE_URL}movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`,
  )
}
export function getRewiew(moviesId) {
  return Api(`${BASE_URL}movie/${moviesId}/reviews?api_key=${API_KEY}&page=1`)
}
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export function getSearch(query) {
  return Api(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`)
}
