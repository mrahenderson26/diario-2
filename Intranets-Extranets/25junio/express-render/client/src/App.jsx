import { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList.jsx';
import './App.css';

const API_URL = 'http://localhost:3000/api/recipes';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch recipes');
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="status">Loading recipes...</div>;
  if (error) return <div className="status error">Error: {error}</div>;

  return (
    <div className="app">
      <h1>Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}
