import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import MovieList from './components/MovieList'
import './App.css'
// 
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [genre, setGenre] = useState('')
  const [yearMin, setYearMin] = useState('')
  const [yearMax, setYearMax] = useState('')
  const [minRating, setMinRating] = useState('')
  const [sortBy, setSortBy] = useState('')

  const { movies, allGenres, yearRange, loading, error } = useMovies({
    searchTerm, genre, yearMin, yearMax, minRating, sortBy
  })

  if (error) return <div className="app"><p className="error">Error: {error}</p></div>

  return (
    <div className="app">
      <header>
        <h1>Buscador de Películas</h1>
        <p className="subtitle">{movies.length} películas encontradas</p>
      </header>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <Filters
        genre={genre}
        onChangeGenre={setGenre}
        allGenres={allGenres}
        yearMin={yearMin}
        yearMax={yearMax}
        yearRange={yearRange}
        onChangeYearMin={setYearMin}
        onChangeYearMax={setYearMax}
        minRating={minRating}
        onChangeRating={setMinRating}
        sortBy={sortBy}
        onChangeSort={setSortBy}
      />

      {loading ? (
        <p className="loading">Cargando películas...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  )
}

export default App