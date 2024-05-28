# Use an official Node.js runtime as the base image
FROM cypress/base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Cypress binary
RUN npx cypress install --version 13.9.0

# Copy the rest of the application code
COPY . .

# Expose the port used by Cypress (optional)
EXPOSE 8080

# Run Cypress tests (replace 'npm run cy:run' with the command you use to run your tests)
CMD ["npm", "run", "cy:run"]
