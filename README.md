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

Add REACT_APP_ENV to your .env file to enable the mock server. Once the mock server is enabled it does not matter
what the value of REACT_APP_MIP_PULL_API_URL and REACT_APP_API are as both the mock server and the web app use these
environment variables. When the mock server is disabled you will need to configure the api environment variables to
thee relevant values based on the environment you are using.

```
REACT_APP_ENV="development"
REACT_APP_MIP_PULL_API_URL='http://localhost:6290/'
REACT_APP_API='http://localhost:6289'
```

### TODO

- Write unit tests to increase coverage - Jake & Ryan
- Define concrete types where possible - Jake & Ryan
- Move everything to types files - Jake & Ryan
- Mock SOAP RE and create table - Jake (Next Year)
- DIE & RE filters - Jake (can be done next year)
