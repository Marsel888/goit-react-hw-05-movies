import { useEffect, useState } from 'react'
import { getCast } from '../../app/Api'
import { useParams } from 'react-router-dom'
import CastRender from './CastRender'
export default function Cast() {
  const [casts, setCast] = useState(null)

  const { moviesId } = useParams()

  useEffect(() => {
    getCast(moviesId).then((data) => setCast(data))
  }, [])
  console.log(casts)
  return (
    casts && (
      <ul>
        {casts.cast.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <img
              src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
              alt=""
            />
          </li>
        ))}
      </ul>
    )
  )
}
