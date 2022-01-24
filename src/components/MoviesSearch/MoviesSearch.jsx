import { useState } from 'react'
import { getSearch } from '../../app/Api'
import { ButtonHome } from '../ButtonHome/ButtonHome'
import MovieRender from '../MovieRender/MovieRender'
import { useLocation, useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export default function MoviesSearch() {
  const [searh, setsearh] = useState('')
  const [test, setTest] = useState('')

  let navigate = useNavigate()
  let location = useLocation()
  const fnNavigate = () => {
    navigate(`${location.pathname}?query=${searh}`)
  }
  const hendlerSubmit = (e) => {
    e.preventDefault()

    getSearch(searh).then((data) => setTest(data))
  }

  const inputChange = (e) => {
    setsearh(e.target.value)
  }

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
