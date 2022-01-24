import { getTrending } from '../../app/Api'
import React, { useState, useEffect } from 'react'
import MoviesList from '../MoviesList/MoviesList'

export default function HomePage() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getTrending().then((data) => setMovies(data.results))
  }, [])

  return <MoviesList data={movies} />
}
