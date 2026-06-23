import { useEffect, useState } from 'react';

// This value comes from frontend/.env through Vite's import.meta.env.
// It is safe because it is only the backend URL, not a secret.
const VITE_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadBackendData() {
    setLoading(true);
    setError('');
    setData(null);

    try {
      const response = await fetch(`${VITE_API_URL}/api/demo`);

      if (!response.ok) {
        throw new Error(`Backend responded with ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Empty dependency array = run once when this component first loads.
    // This is a common place to fetch initial data from your backend.
    loadBackendData();
  }, []);

  return (
    <main className="page">
      <section className="card">
        <h1>React + Express env demo</h1>

        <p>
          The frontend reads its backend URL from{' '}
          <code>import.meta.env.VITE_API_URL</code>.
        </p>

        <p>
          Current frontend value:{' '}
          <code>{VITE_API_URL}</code>
        </p>

        <p>
          This app calls the backend automatically inside <code>useEffect()</code>{' '}
          when the React component first loads.
        </p>

        <button onClick={loadBackendData} disabled={loading}>
          {loading ? 'Loading...' : 'Reload backend data'}
        </button>

        {loading && <p>Loading data from the backend...</p>}

        {error && <p className="error">Error: {error}</p>}

        {data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </section>
    </main>
  );
}
