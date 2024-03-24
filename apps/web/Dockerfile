# Use Node.js LTS version as base image
FROM node:lts-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from current directory to work directory
COPY . .

# Build React app
RUN npm run build


# Expose port 3000
EXPOSE 4173

# Start Nginx server
CMD ["npm", "run", "preview"]