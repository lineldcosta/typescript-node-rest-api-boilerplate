import { Router, Request, Response, NextFunction } from 'express';

const dataFormat = (router: Router) => {
  router.use((req: Request, res: Response, next: NextFunction) => {
    req._data = [];
    next();
  });
};

const resFormat = (router: Router) => {
  router.use((req: Request, res: Response, next: NextFunction) => {
    res.api = {
      status: 200,
      errors: [],
      data: [] || {},
    };
    next();
  });
};

export default [dataFormat, resFormat];
