# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variable for Nest.js to run in development mode
ENV NODE_ENV=development

# Expose the port on which the Nest.js application is running (if applicable)
# EXPOSE 3001

# Start the Nest.js application using yarn start:dev
CMD ["yarn", "start:dev"]
