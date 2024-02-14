const { handler } = require('../index.js');
const dotenv = require('dotenv');
const pg = require('pg');
const result = dotenv.config();


if (result.error) {
    console.log(`Error: .env file not found, create a .env file on root directory.
                 ENV FILE MUST HAVE THE FOLLOWING VARIABLES:
                 => PGUSER
                 => PGHOST
                 => PGPASSWORD
                 => PGDATABASE
                 => PGPORT`);

    process.exit(1);
}

let db;

beforeAll(async () => {
    db = new pg.Client();
    await db.connect();
});

afterAll(async () => {
    await db.end();
});

describe('Getting Date from server', () => {

    it('Setup DataBase', () => {
        expect(db).toBeDefined();
        expect(db._connected).toBe(true);
    });

    it(`Success Get Current Date from server`, async () => {
        const event = {
            httpMethod: 'GET',
        }

        const response = await handler(event);

        expect(response.statusCode).toBe(200);
    });

    it(`Not Allowed Get Current Date from server`, async () => {
        const event = {
            httpMethod: 'POST',
        }

        const response = await handler(event);

        expect(response.statusCode).toBe(405);
    });
});

