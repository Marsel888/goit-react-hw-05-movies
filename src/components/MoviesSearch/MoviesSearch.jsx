import { useEffect, useState } from 'react'
import { getSearch } from '../../app/Api'
import { ButtonHome } from '../ButtonHome/ButtonHome'
import MovieRender from '../../Page/MovieRender/MovieRender'
import { useLocation, useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export default function MoviesSearch() {
  const [searh, setsearh] = useState(null)
  const [test, setTest] = useState(
    JSON.parse(localStorage.getItem('name')) || '',
  )

  let navigate = useNavigate()
  let location = useLocation()
  const fnNavigate = () => {
    navigate(`${location.pathname}?query=${searh}`)
  }

  const hendlerSubmit = (e) => {
    e.preventDefault()

    getSearch(searh)
      .then((data) => setTest(data))
      .catch((Error) => console.log(Error))
  }

  const inputChange = (e) => {
    setsearh(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(test))
  }, [test])

  return (
    <>
      <form action="" onSubmit={hendlerSubmit}>
        <input type="text" onChange={inputChange} />

        <button type="submit" onClick={fnNavigate}>
          Поиск
        </button>
      </form>
      <Outlet />

      <ButtonHome />
      {test && <MovieRender searh={test} />}
    </>
  )
}
