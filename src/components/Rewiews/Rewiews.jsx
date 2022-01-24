import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getRewiew } from '../../app/Api'
export default function Rewiews() {
  const [rewiew, setRewiew] = useState(null)
  const { moviesId } = useParams()
  useEffect(() => {
    getRewiew(moviesId).then((data) => setRewiew(data))
  }, [])
  console.log(rewiew)

  return (
    rewiew && (
      <ul>
        {rewiew.results.length > 0 ? (
          rewiew.results.map((item) => (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <span>{item.content}</span>
            </li>
          ))
        ) : (
          <span>Нету описания</span>
        )}
      </ul>
    )
  )
}
