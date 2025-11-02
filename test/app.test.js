const request = require('supertest');
const app = require('../app');

describe('GET /api/hello', () => {
  it('returns hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello from CI/CD demo!');
  });
});
