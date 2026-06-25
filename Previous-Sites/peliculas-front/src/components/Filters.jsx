export default function Filters({
  genre, onChangeGenre, allGenres,
  yearMin, yearMax, yearRange, onChangeYearMin, onChangeYearMax,
  minRating, onChangeRating,
  sortBy, onChangeSort
}) {
  return (
    <div className="filters">
      <select value={genre} onChange={e => onChangeGenre(e.target.value)}>
        <option value="">Todos los géneros</option>
        {allGenres.map(g => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <div className="filter-group">
        <label>Año</label>
        <div className="range-inputs">
          <input
            type="number"
            placeholder={String(yearRange.min)}
            value={yearMin}
            onChange={e => onChangeYearMin(e.target.value)}
            min={yearRange.min}
            max={yearRange.max}
          />
          <span>—</span>
          <input
            type="number"
            placeholder={String(yearRange.max)}
            value={yearMax}
            onChange={e => onChangeYearMax(e.target.value)}
            min={yearRange.min}
            max={yearRange.max}
          />
        </div>
      </div>

      <div className="filter-group">
        <label>Puntuación mínima: {minRating || 0}</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={minRating || 0}
          onChange={e => onChangeRating(e.target.value)}
        />
      </div>

      <select value={sortBy} onChange={e => onChangeSort(e.target.value)}>
        <option value="">Ordenar por...</option>
        <option value="titulo">Título (A-Z)</option>
        <option value="año">Año (más antiguo)</option>
        <option value="puntuacion">Puntuación (mejor primero)</option>
        <option value="duracion">Duración (más larga)</option>
      </select>
    </div>
  )
}