
import * as request from 'supertest';
import app from '../src/boot';
import { expect } from 'chai';

describe('GET /cats', () => {
  it('should return 200 OK', async () => {
    return request(app)
      .get('/cats')
      .then(res => {
        const data = JSON.parse(res.text);
        expect(data).to.be.an.instanceOf(Array);
      });
  });
});
