import { lazy, Suspense } from 'react'
// import Navigation from './components/navigation/navigation/navigation'
// import HomePage from './components/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
// import MoviesSearch from './components/MoviesSearch/MoviesSearch'
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'
// import Cast from './components/Cast/Cast'
// import Rewiews from './components/Rewiews/Rewiews'

const Navigation = lazy(() =>
  import('./components/navigation/navigation/navigation'),
)
const HomePage = lazy(() => import('./components/HomePage/HomePage'))
const MoviesSearch = lazy(() =>
  import('./components/MoviesSearch/MoviesSearch'),
)
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage'),
)
const Cast = lazy(() => import('./components/Cast/Cast'))
const Rewiews = lazy(() => import('./components/Rewiews/Rewiews'))
function App() {
  return (
    <Suspense fallback={<h1>Загрузка</h1>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesSearch />}></Route>

          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="rewiews" element={<Rewiews />} />
          </Route>
          <Route path="*" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
