import { Router, Request, Response, NextFunction } from 'express';
import { createLogger, transports, format } from 'winston';
import config from './../../cfg';

const transport = [];

if (process.env.NODE_ENV == 'development') {
  transport.push(new transports.Console());
}

transport.push(
  new transports.File({
    filename: config.logs.file,
    level: config.logs.level,
    handleExceptions: true,
  }),
);

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  transports: transport,
  exitOnError: false,
});

export const HandleLogger = (router: Router) => {
  if (!config.logs.logRequestsEnabled) {
    logger.debug('Request logging not activated');
  }
  let count = 0;
  router.use((req: Request, res: Response, next: NextFunction) => {
    req.logData = {
      method: req.method,
      url: req.originalUrl,
      query: req.query,
      body: req.body,
      reqid: ++count,
      ip: req.ip,
    };
    logger.info('request', req.logData);
    next();
  });
};
