import * as supertest from 'supertest';
import * as qs from 'qs';

let config = require(__dirname + '/../../../../src/cfg/index.ts').default,
  version = require(__dirname + '/../../../../src/api/v1/index.ts'),
  url = config.baseurl + ':' + config.api.port,
  api = supertest(url + '' + version.path);
//  data = require(__dirname + '/../../../../data');

describe('status#index', () => {
  test('Check server modules are up & running', done => {
    api
      .get('/status')
      .expect(200)
      .end((err, res) => {
        expect(typeof res.body).toBe('object');
        expect(res.body).toHaveProperty('status');
        done();
      });
  });

  test('Check server modules are up & running without get request', done => {
    api
      .post('/status')
      .expect(404)
      .end((err, res) => {
        expect(res.body.status).toBe(404);
        done();
      });
  });
});
