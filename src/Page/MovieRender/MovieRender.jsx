import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'

export default function MovieRender(searh) {
  const location = useLocation()
  return (
    <>
      <ul>
        {searh.searh.results.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`} state={{ from: location }}>
              {' '}
              <img
                src={`https://image.tmdb.org/t/p/w300
${item.poster_path}`}
                alt=""
              />
              <h3>{item.original_title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
