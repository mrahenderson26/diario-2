import { useState, useEffect, useMemo } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''

export function useMovies({ searchTerm, genre, yearMin, yearMax, minRating, sortBy }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/peliculas`)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar películas')
        return res.json()
      })
      .then(data => {
        setMovies(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filteredMovies = useMemo(() => {
    let result = [...movies]

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(m =>
        m.titulo.toLowerCase().includes(term) ||
        m.director.toLowerCase().includes(term) ||
        m.actores.some(a => a.toLowerCase().includes(term))
      )
    }

    if (genre) {
      result = result.filter(m => m.generos.includes(genre))
    }

    if (yearMin) result = result.filter(m => m.año >= Number(yearMin))
    if (yearMax) result = result.filter(m => m.año <= Number(yearMax))
    if (minRating) result = result.filter(m => m.puntuacion >= Number(minRating))

    if (sortBy) {
      result.sort((a, b) => {
        switch (sortBy) {
          case 'titulo': return a.titulo.localeCompare(b.titulo)
          case 'año': return a.año - b.año
          case 'puntuacion': return b.puntuacion - a.puntuacion
          case 'duracion': return b.duracion - a.duracion
          default: return 0
        }
      })
    }

    return result
  }, [movies, searchTerm, genre, yearMin, yearMax, minRating, sortBy])

  const allGenres = useMemo(() => {
    const genres = new Set()
    movies.forEach(m => m.generos.forEach(g => genres.add(g)))
    return [...genres].sort()
  }, [movies])

  const yearRange = useMemo(() => {
    if (!movies.length) return { min: 0, max: 0 }
    const years = movies.map(m => m.año)
    return { min: Math.min(...years), max: Math.max(...years) }
  }, [movies])

  return { movies: filteredMovies, allGenres, yearRange, loading, error }
}