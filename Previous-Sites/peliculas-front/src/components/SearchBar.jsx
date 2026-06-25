export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por título, director o actor..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}