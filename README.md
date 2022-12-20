# Create React App and Ant Design

## Versions

Make sure the following versions are installed globally on your machine:

- node.js 16.19.0
- npm 8.19.3

## Install Packages

In the terminal run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run coverage`

Launches the test runner running coverage over the codebase. See the jest section of package.json for files excluded and coverage thresholds.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Running mock server

Add the following to your .env file

```
REACT_APP_ENV="development"
```

### TODO

- Merge statusView and Home folders, delete statusView - Jake
- Write unit tests to increase coverage - Jake & Ryan
- Mock api calls for json files (two data tables) - Jake
- Move data formatters to appropriate folders - Jake & Ryan
- Remove as many typecasts as possible - Jake & Ryan
- Define concrete types where possible - Jake & Ryan
- Move everything to types files - Jake & Ryan
- Navbar to sidebar - Jake
- Mock SOAP RE and create table - Jake
- Graph placeholder - Ryan
- DIE & RE filters - Jake (can be done next year)
- Tidy up existing components - Jake and Ryan
