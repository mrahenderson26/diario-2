import express from "express";
import cors from 'cors';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const RECIPES_PATH = resolve(__dirname, 'recipes.json');

const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5175" }));
app.use(express.json());

function readRecipes() {
  if (!existsSync(RECIPES_PATH)) return [];
  const raw = readFileSync(RECIPES_PATH, 'utf-8');
  return JSON.parse(raw);
}

function writeRecipes(data) {
  writeFileSync(RECIPES_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

app.get("/api/recipes", (req, res) => {
  const recipes = readRecipes();
  res.json(recipes);
});

app.post("/api/recipes", (req, res) => {
  const { recipes } = req.body;
  if (!Array.isArray(recipes)) {
    return res.status(400).json({ error: "Body must contain a 'recipes' array" });
  }
  writeRecipes(recipes);
  res.status(201).json({ message: "Recipes saved", count: recipes.length });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});