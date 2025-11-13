# Step 1: Use official Node image
FROM node:18-alpine

# Step 2: Create app directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --production

# Step 5: Copy all files
COPY . .

# Step 6: Expose port 3000
EXPOSE 3000

# Step 7: Start app
CMD ["npm", "start"]
