import 'reflect-metadata';

//import 'module-alias/register';
import * as express from 'express';
import { createServer } from 'http';
import * as SetTimeZone from 'set-tz';
import { middlewareLoader } from './middleware';
import { handleServerExit, handleExceptions } from './middleware/errorMiddleware';
import Config from './../cfg';
SetTimeZone('UTC');

async function startServer() {
  let app = express();

  await middlewareLoader(app);

  let server = createServer(app);

  server.listen(Config.api.port);

  process.on('unhandledRejection', handleExceptions);
  process.on('uncaughtException', handleExceptions);
  process.on('SIGINT', handleServerExit('SIGINT', server));
  process.on('SIGTERM', handleServerExit('SIGTERM', server));
}

startServer();
