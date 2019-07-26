import { IConfig } from '@interfaces/IConfig';

const config: IConfig = {
  api: {
    port: 9000,
  },
  db: {
    host: `${process.env.host}`,
    user: `${process.env.user}`, //this is the db user credential
    database: `${process.env.database}`,
    password: `${process.env.password}`,
    port: process.env.port || 3000,
    max: process.env.max, // max number of clients in the pool
    idleTimeoutMillis: process.env.timeout,
  },
};
export default config;
