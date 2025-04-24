# Use a minimal Node.js base image
FROM node:20-alpine

# Create and set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment to production
ENV NODE_ENV=production

# Expose the port (matches PORT in .env)
EXPOSE 3000

# Run the app
CMD ["node", "src/index.js"]
