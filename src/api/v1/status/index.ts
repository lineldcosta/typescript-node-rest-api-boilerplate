import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import statusService from './../../../services/status';
import { path } from './../index';

/**
 * @swagger
 *
 * definition:
 *    status:
 *      properties:
 *        status:
 *          type: object
 *          properties:
 *            apiStatus:
 *              type: string
 * /status:
 *    get:
 *      tags:
 *       - "status"
 *      summary: "return the status of server"
 *      consumes:
 *        - "application/json"
 *      produces:
 *        - "application/json"
 *      responses:
 *        200:
 *          description: "Successful operation"
 *          schema:
 *            $ref: '#/definitions/status'
 *        500:
 *          description: "Error connecting the all the resources"
 */

export default [
  {
    path: `${path}/status`,
    method: 'get',
    handler: [
      async (Req: Request, res: Response, next: NextFunction) => {
        try {
          let statusServiceInstance = Container.get(statusService);
          let apiStatus = await statusServiceInstance.status();
          res.api.status = 200;
          res.status(res.api.status);
          res.api.data.push(apiStatus);
          res.send(res.api);
        } catch (error) {
          next(error);
        }
      },
    ],
  },
];
