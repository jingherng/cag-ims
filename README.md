## PRE-SETUP

1. Configure sequelize.config.ts and config.json in src/api/config to your local mysql database's username and password.
2. npm i

## APP START UP

Run the following commands in the following order:
1. npm run docker:start
2. npm run db:setup
3. npm run api:start
4. npm run web:start

## COMMON ISSUES

### npm install ERESOLVE could not resolve

run `npm install --legacy-peer-deps`

## Available Scripts

In the project directory, you can run:

### `npm run docker:start`

Starts service from docker-compose.yml

### `npm run db:setup`

Creates, migrates and seeds local database

### `npm run web:start`

Runs FE, PORT 3000
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run api:start`

Runs BE, PORT 4000
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

