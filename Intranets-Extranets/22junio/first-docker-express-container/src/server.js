import express from 'express';

const app = express();

// Inside Docker, the app listens on port 3000.
// We will map this to a port on your PC when we run the container.
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'This is your second container' });
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
