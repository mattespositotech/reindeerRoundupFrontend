
# Reindeer Roundup Frontend

## Introduction
**Reindeer Roundup Frontend** is a web-based application built with React and TypeScript, designed to provide an interactive user experience. This project uses Vite as the build tool and follows modern development practices.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [License](#license)

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Start a development server:
```bash
npm run dev
```
Start a server connected to production api:
```bash
npm run prod
```
Build for production:
```bash
npm run build
```

## Scripts
- `dev`: Starts the Vite development server.
- `prod`: Runs Vite in production mode.
- `build`: Compiles TypeScript and builds the project.
- `lint`: Runs ESLint with specific settings.
- `preview`: Previews the production build locally.

## Features
- **React with TypeScript:** Utilizes TypeScript for static typing.
- **Semantic UI React:** Provides accessible and customizable UI components.
- **Form Handling with React Hook Form:** Simplifies form management and validation.
- **Vite Build Tool:** Fast and efficient builds.

## Dependencies
### Core Dependencies
- `react` ^18.2.0
- `react-dom` ^18.2.0
- `react-hook-form` ^7.51.2
- `react-router-dom` ^6.22.3
- `semantic-ui-css` ^2.5.0
- `semantic-ui-react` ^3.0.0-beta.2
- `uuid` ^9.0.1

### Development Dependencies
- TypeScript and type definitions
- ESLint and plugins for code quality
- Vite for development and builds

## Configuration
### TypeScript Configuration
This project includes TypeScript configuration files (`tsconfig.json` and `tsconfig.node.json`) to tailor TypeScript behavior in development and production.

### Static Web App Configuration
The `staticwebapp.config.json` file specifies:
- **Navigation Fallback:** Redirects to `index.html` except for assets in `/images/` and `/css/` folders.

## Deployment
This project is set up for static web hosting. The configuration in `staticwebapp.config.json` indicates compatibility with static platforms, routing all non-asset requests to `index.html` for SPA support.

## License
This project is open-source. Add specific licensing information here if applicable.
