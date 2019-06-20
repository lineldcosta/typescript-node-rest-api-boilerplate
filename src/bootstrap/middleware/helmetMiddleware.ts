import { Router } from 'express';
import * as helmet from 'helmet';

export const handleHelmet = (router: Router) => {
  router.use(helmet());
};
