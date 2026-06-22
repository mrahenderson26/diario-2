# First Docker Express Container

This is a tiny Express backend that returns:

```json
{
  "message": "This is your first container"
}
```

The point of this project is not the Express code. The point is to see the normal files used to containerise a small app.

## Files in this project

```text
first-docker-express-container/
├─ Dockerfile
├─ .dockerignore
├─ compose.yaml
├─ package.json
└─ src/
   └─ server.js
```

## What each file does

### `src/server.js`

The actual backend app. It starts an Express server on port `3000` and responds with JSON at `/`.

### `package.json`

The normal Node.js project file. It says which packages the app needs and defines this start command:

```bash
npm start
```

### `Dockerfile`

The recipe for building a Docker image. An image is like a packaged version of your app plus everything it needs to run.

This Dockerfile says:

1. Start from a small Node.js Linux image.
2. Create an `/app` folder inside the container.
3. Copy `package.json` into the image.
4. Install dependencies.
5. Copy the app code.
6. Run `npm start` when the container starts.

### `.dockerignore`

Tells Docker which files not to copy into the image. This keeps the image cleaner and avoids copying things like `node_modules` from your PC.

### `compose.yaml`

A convenience file for running the container with Docker Compose. It says:

- Build the image from the current folder.
- Run it as a service called `backend`.
- Map port `3000` on your PC to port `3000` inside the container.

## Option 1: Run it with plain Docker

From inside this folder, run:

```bash
docker build -t first-express-container .
```

This builds an image called `first-express-container`.

Then run:

```bash
docker run --name first-express-container-app -p 3000:3000 first-express-container
```

Now open this in your browser:

```text
http://localhost:3000
```

You should see:

```json
{
  "message": "This is your first container"
}
```

To stop the container, press `Ctrl + C` in the terminal where it is running.

If you want to remove the stopped container afterwards:

```bash
docker rm first-express-container-app
```

## Option 2: Run it with Docker Compose

From inside this folder, run:

```bash
docker compose up --build
```

Then open:

```text
http://localhost:3000
```

To stop it, press `Ctrl + C`.

To remove the stopped container/network created by Compose:

```bash
docker compose down
```

## The key Docker idea

The image is the packaged app.

The container is a running instance of that image.

A rough analogy:

```text
Dockerfile  -> recipe
Image       -> finished cake
Container   -> cake being served/running
```

## Useful commands

List running containers:

```bash
docker ps
```

List all containers, including stopped ones:

```bash
docker ps -a
```

List images:

```bash
docker images
```

Stop a running container:

```bash
docker stop first-express-container-app
```

Remove a container:

```bash
docker rm first-express-container-app
```

Remove an image:

```bash
docker rmi first-express-container
```
