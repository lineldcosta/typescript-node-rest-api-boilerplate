declare namespace Express {
  interface Request {
    _data?: any;
    logData?: {
      method: string;
      body: string;
      url: string;
      query: string;
      reqid?: number;
      ip: any;
      err?: any;
      stack?: any;
    };
  }
  interface Response {
    api?: any;
  }
}
