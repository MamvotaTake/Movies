// import './App.css'

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Movies from "./pages/Movies"
import Movie from "./pages/Movie"
import PageNotFound from "./pages/PageNotFound"
import Home from "./pages/Home"
import Anime from "./pages/Anime"
import { MoviesProvider } from "./contexts/MoviesContext"
import GlobalStyles from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <MoviesProvider>
        <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="movies" />} />
              <Route path="home" element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:id" element={<Movie />} />
              <Route path="anime" element={<Anime />} />
              
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  )
}

export default App
