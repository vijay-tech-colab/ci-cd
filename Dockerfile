# Use Node.js alpine image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source files
COPY . .

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "src/index.js"]
