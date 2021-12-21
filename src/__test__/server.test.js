const request = require('supertest');
const server = require('../server/index');
import "babel-polyfill"

 describe('Test root path', () => {
    test('It should response ', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
    });
});

