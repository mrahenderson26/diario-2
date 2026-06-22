# A Dockerfile is the recipe for building your image.
# This one starts from an official Node.js image.
FROM node:20-alpine

# This is the folder inside the container where the app will live.
WORKDIR /app

# Copy only package files first so Docker can cache npm install.
COPY package*.json ./

# Install the app dependencies inside the image.
RUN npm install --omit=dev

# Copy the rest of the project files into the image.
COPY . .

# This documents that the app uses port 3000 inside the container.
EXPOSE 3000

# This is the command that runs when the container starts.
CMD ["npm", "start"]
