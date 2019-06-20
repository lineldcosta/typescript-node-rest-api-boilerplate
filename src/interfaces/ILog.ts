export interface ILog {
  method: string;
  url: string;
  query: string;
  reqid?: number;
  ip: any;
  err?: any;
  stack?: any;
}
