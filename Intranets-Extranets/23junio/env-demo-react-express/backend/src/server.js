import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

// These values come from backend/.env through process.env.
const PORT = process.env.PORT || 5000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';
const EXTERNAL_API_URL = process.env.EXTERNAL_API_URL || 'https://jsonplaceholder.typicode.com';

app.use(cors({ origin: FRONTEND_ORIGIN }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Backend is running' });
});

app.get('/api/demo', async (req, res) => {
  try {
    // This backend calls a public external API. No API key or account needed.
    const response = await fetch(`${EXTERNAL_API_URL}/todos/1`);

    if (!response.ok) {
      throw new Error(`External API responded with ${response.status}`);
    }

    const externalData = await response.json();

    res.json({
      message: 'This came from your Express backend.',
      backendEnvExample: {
        externalApiUrlFromProcessEnv: EXTERNAL_API_URL,
        frontendOriginFromProcessEnv: FRONTEND_ORIGIN
      },
      externalData
    });
  } catch (error) {
    res.status(500).json({
      error: 'The backend could not fetch data from the external API.',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
