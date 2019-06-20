import * as supertest from 'supertest';
import { expect } from 'chai';
import * as qs from 'qs';

let config = require(__dirname + '/../../../../src/cfg/index.ts').default,
  version = require(__dirname + '/../../../../src/api/v1/index.ts'),
  url = config.baseurl + ':' + config.api.port,
  api = supertest(url + '' + version.path);
//  data = require(__dirname + '/../../../../data');

describe('status#index', () => {
  it('Check server modules are up & running', done => {
    api
      .get('/status')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.all.keys('status');
        return;
      });
    done();
  });

  it('Check server modules are up & running without get request', done => {
    api
      .post('/status')
      .expect(404)
      .end((err, res) => {
        expect(res.body.status).to.equals(404);
        return;
      });
    done();
  });
});
