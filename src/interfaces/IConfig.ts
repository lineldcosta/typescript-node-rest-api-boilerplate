export interface ILog {
  level: string;
  logRequestsEnabled: boolean;
  file?: string;
}

export interface IJwt {
  secret: string;
  expiresInHours?: number;
}

export interface IApi {
  prefix?: string;
  port?: number | string;
  jwt?: IJwt;
  bcrypt?: Record<string, number>;
}

export interface Idb {
  host?: string;
  user?: string;
  database?: string;
  password?: string;
  port?: number | string;
  max?: number | string;
  idleTimeoutMillis?: number | string;
}
export interface IConfig {
  appname?: string;
  baseurl?: string;
  env?: string;
  api?: IApi;
  logs?: ILog;
  db?: Idb;
  interceptors?: any;
}
