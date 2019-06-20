import * as dotenv from 'dotenv-safe';
import { IConfig } from '@interfaces/IConfig';

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config: IConfig = {
  appname: 'Blue App',
  baseurl: process.env.BASEURL || 'http://localhost',
  env: process.env.NODE_ENV || 'development',
  api: {
    prefix: '/api',
    port: process.env.PORT || 3000,
    jwt: {
      secret: 'secret', // update before deployment
      expiresInHours: 24, // 24 hrs, update before deployment
    },
    bcrypt: {
      rounds: 8,
    },
  },
  db: {
    user: 'postgres', //this is the db user credential
    database: 'blueapp',
    password: 'Impelsys1',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 3000,
  },
  logs: {
    level: process.env.LOG_LEVEL || 'debug',
    logRequestsEnabled: true,
    file: 'debug.log',
  },
};

export default {
  ...config,
  ...require(`./${config.env}`).default,
};
