## Lambda Function Template with Node.js, and PostgreSQL Connection

This template provides a starting point for creating a Lambda function using Node.js connecting to a PostgreSQL database. It follows a structured project organization with a focus on modularity and separation of concerns.

## Table of contents
* [Overview](#overview)
* [Technologies](#technologies)
* [Env Variables](#environment-variables)
* [Production Setup](#production-setup)
* [Development Setup](#development-setup)

## Overview
This function is responsible for retrieving needed information for home screen.

## Technologies
This function has been developed using [NodeJs](https://nodejs.org/).

Dependencies:
* [pg](https://www.npmjs.com/package/pg)

Dev-dependencies:
* [dotenv](https://www.npmjs.com/package/dotenv)
* [Jest](https://jestjs.io/)
	
## Environment Variables
This function requires the following environment variables.

`PGUSER`  (Postgres database user)

`PGHOST`  (Postgres Database host)

`PGPASSWORD` (Postgres Database password)

`PGDATABASE`  (Postgres Database name)

`PGPORT` (Postgres Database port)

## Production setup
To deploy on aws lambda:

```
$ npm install --production
$ zip -r home.zip index.js node_modules/
```
Then create the lambda function on aws console and upload home.zip file.

More details on: [aws-docs](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html)

## Development setup
To run this project locally, install it locally using npm:

```
$ npm install
$ npm test
```

This will automatically run the [test.js](./test/test.js) script which simulates a call to the function.

> Note: In order to run this project locally a .env file must be provided on the current root directory.
> The .env file MUST HAVE the following variables: PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT.


### Customization

Feel free to customize this template according to your project requirements. You can add more functions, endpoints, or modify the database schema as needed.

### Contributing

If you find any issues or want to contribute, please feel free to open an issue or submit a pull request on GitHub.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- Inspired by [Serverless Framework](https://www.serverless.com/) and the Node.js community.
- Special thanks to contributors and open-source maintainers.

The template was created by [Jesus Sanchez](https://www.linkedin.com/in/jdsanchez94/)
