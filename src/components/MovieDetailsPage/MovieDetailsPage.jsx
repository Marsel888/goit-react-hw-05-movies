import { useEffect, useState } from 'react'
import {
  useParams,
  Link,
  Route,
  Routes,
  Outlet,
  useLocation,
} from 'react-router-dom'
import { getIdMovies } from '../../app/Api'
import Cast from '../Cast/Cast'
import { ButtonHome } from '../ButtonHome/ButtonHome'
export default function MovieDetailsPage() {
  const { moviesId } = useParams()
  const [movieOne, setMovieOne] = useState('')
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    getIdMovies(moviesId).then((data) => setMovieOne(data))
  }, [])

  return (
    <>
      <ButtonHome from={location.state.from} />
      <div>
        <h2>{movieOne.title}</h2>
        {
          <img
            src={`https://image.tmdb.org/t/p/w300
${movieOne.poster_path}`}
            alt=""
          />
        }
        <h3>Overview</h3>
        <p>{movieOne.overview}</p>
        <h3>Genres</h3>
        {movieOne &&
          movieOne.genres.map((item) => (
            <span key={item.id}> {item.name},</span>
          ))}
        <hr />
        <Link to="cast" state={{ from: location.state.from }}>
          Cast
        </Link>
        <br />
        <Link to="rewiews" state={{ from: location.state.from }}>
          Rewiews
        </Link>
        <Outlet />
      </div>
    </>
  )
}
