const pg = require('pg');

const MethodNotAllowedException = require('./method_not_allowed_exception');

const pool = new pg.Pool();


const generateCorsHeaders = () => {
    return {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Content-Type': 'application/json'
    };
};


exports.handler = async (event) => {

    const client = await pool.connect();

    let response;

    try {

        if (event.httpMethod.toUpperCase() !== 'GET') {
            throw new MethodNotAllowedException('Method not allowed');
        }

        const queryResult = await client.query('SELECT CURRENT_DATE');

        const currentDate = queryResult.rows[0];

        response = {
            headers: generateCorsHeaders(),
            statusCode: 200,
            body: JSON.stringify(currentDate)
        };

    } catch (error) {
        const statusCode = (error instanceof MethodNotAllowedException) ? 405 : 500;

        response = {
            statusCode: statusCode,
            headers: generateCorsHeaders(),
            body: JSON.stringify({ description: error.toString() })
        };

    } finally {
        client.release();
    }

    return response;
};