import { NavLink, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/" className="nav_link">
          Home
        </NavLink>
        <NavLink to="/movies" className="nav_link">
          Movies
        </NavLink>
        <hr />
      </nav>
      <Outlet />
    </>
  )
}
