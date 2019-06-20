import * as pg from 'pg';
import { Logger } from 'winston';
import { Container } from 'typedi';
import cfg from './../../../cfg';

const config = {
  user: cfg.db.user, //this is the db user credential
  database: cfg.db.database,
  password: cfg.db.password,
  port: cfg.db.port,
  max: cfg.db.max, // max number of clients in the pool
  idleTimeoutMillis: cfg.db.idleTimeoutMillis,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});

pool.on('error', function(err, client) {
  console.error('idle client error', err.message, err.stack);
  if (err) {
    const logger: Logger = Container.get('logger');
    logger.error('500', {
      method: '',
      url: '',
      query: '',
      ip: '',
      error: err.message,
      stack: err.stack,
    });
  }
});

export default pool;
