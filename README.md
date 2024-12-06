## Introduction

This project is a digital whiteboard application designed for seamless real-time collaboration. It provides a space where users can share ideas, brainstorm creatively, and collaborate effectively online.

## Key Features

Collaborative Tools: Allows multiple users to work on the whiteboard simultaneously.

Drawing Tools: Includes options like a pen, highlighter, and shapes for creating visuals.

Text Tools: Supports adding text boxes and customizing fonts.

Image Support: Enables image uploads with resizing and manipulation options.

User Authentication: Includes user roles and secure login.

Session Management: Offers saving and reloading of whiteboard sessions.

Export Options: Export whiteboards as image files or PDFs.

Third-Party Integrations: Compatible with tools like Slack and Microsoft Teams for enhanced collaboration.

## Technology Stack

Frontend: Built using React and Next.js.

Backend: Utilizes Node.js with WebSocket (via Socket.IO) and Express.

Database: PostgreSQL for data management.

Authentication: Implements JWT and OAuth for user authentication.


## Getting Started


Cloning the Repository

Clone the repository to your local machine:

git clone https://github.com/yourusername/Whiteboard.git

cd Whiteboard

Installing Dependencies

Install all required dependencies:

npm install

Running the Application

Start the development server:

npm run dev

To prepare the app for production, build it:

npm run build

Start the production server:

npm start


## Deployment Guide
Building the Application

Create a production-ready build of the application:

npm run build

Deploying to GitHub Pages

Deploy the application to GitHub Pages:

npm run deploy

## Available Scripts

dev: Starts the app in development mode with automatic reloading.

dev:client: Runs the client-side code using TypeScript.

build:server: Compiles server-side TypeScript files.

build:next: Builds the Next.js application.

build: Executes all build processes.

start: Launches the production server with NODE_ENV set to production.

lint: Checks the code for linting issues using Next.js linter.

predeploy: Prepares the app for deployment by running the build.

deploy: Deploys the application to GitHub Pages.
