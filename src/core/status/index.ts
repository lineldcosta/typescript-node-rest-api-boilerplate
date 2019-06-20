import { Service, Inject } from 'typedi';
import { Pool } from 'pg';

@Service('statusModel')
class StatusModel {
  constructor(@Inject('db') private db: Pool) {}
  public async getApiStatus(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        this.db.query('SELECT * FROM status;', (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results.rows[0].status);
        });
      } catch (e) {
        return reject(e);
      }
    });
  }
}

export default StatusModel;
