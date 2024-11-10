
# Reindeer Roundup Frontend

## Introduction
**Reindeer Roundup Frontend** is a web-based application built with React and TypeScript, designed to provide an interactive user experience for organizing Secret Santa gift exchanges. Reindeer Roundup started as a fun solution to a family dilemma: participants drawing the name of someone in thier immediate family. I created a simple program that quickly became a family favorite. Inspired by their enthusiasm, I decided to turn it into a website to share the joy and test my web development skills.

### How It Works

1. **Add Participants:** Start by creating an event, adding participant names and emails, and optionally setting up a "blacklist" to prevent certain pairings.

2. **Send Invitations:** Once participants are added, the app sends email invitations, allowing people to accept or decline their participation.

3. **Draw Names:** When everyone has responded, the app draws names automatically and notifies each participant of their Secret Santa assignment.

4. **Exchange Gifts:** On the event date, meet up and exchange gifts, enjoying the holiday spirit with friends and family.

Reindeer Roundup makes organizing and drawing names simple and fun, so you can focus on the joy of giving!

### Check Out the Live Site

[Visit Reindeer Roundup](https://reindeer-roundup.com)

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Start a development server (needs the API found [here](https://github.com/mattespositotech/reindeerRoundupApi)):
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

## Features

- **Roundup Management**: Add, edit, delete, and manage participant roundups.
- **Blacklist Management**: Manage blacklists for specific roundups with features to add, edit, or delete blacklisted participants.
- **Reusable Components**: Modular components like `BuildAListButton`, `Stepper`, `ActionsToolbar`, and custom forms streamline the user interface.
- **Protected Routes**: Secure routing with authentication checks.
- **Data Handling**: CRUD operations for managing user and roundup data.
- **CSV Export**: Easily download participant data in CSV format.
- **Custom Pages**: Predefined pages like "How It Works," "HomePage," "SignInPage," and "LegalContent."

# Project Structure
The project is organized as follows:

- **components**: Contains reusable UI components, including forms, roundups elements, and buttons.
- **content**: Stores static content for various pages (e.g., `HomePageContent`, `LegalContent`).
- **context**: Provides `userContext` for managing user state throughout the app.
- **data**: Handles data management with CRUD functions and hooks.
- **enums**: Contains enums for colors, roundups, and users, standardizing data formats.
- **layout**: Contains core layout components, navigation bars, footers, and individual pages.
- **router**: Configures routing with protected and unprotected routes.
- **types**: Defines TypeScript types for roundups, forms, and users, ensuring type safety.
- **utils**: Provides utility functions for session handling and color management.

# Configuration
Environment variables for development and production are set in the `.env` files. Update as needed

## Deployment
This project is set up for static web hosting. The configuration in `staticwebapp.config.json` indicates compatibility with static platforms, routing all non-asset requests to `index.html` for SPA support.

## Image Credit
Images used in this project are created under the [Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). 

- **Name**: IconFinder 
- **URL**: [https://www.iconfinder.com/iconsets/christmas-2949](https://www.iconfinder.com/iconsets/christmas-2949)

