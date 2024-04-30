# Use Node.js LTS version as base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from current directory to work directory
COPY . .
# Expose port 8000


# RUN ./bin/addAdmin deerhack@deerwalk.edu.np deerHackRocks
# RUN ./bin/seedData ./data/main.csv

# Start backend server

RUN chmod +x entrypoint.sh
EXPOSE 5000
RUN npx prisma generate
CMD ["npm","run","dev"]
