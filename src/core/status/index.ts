import { Service, Inject } from 'typedi';
import { sql, DatabaseConnectionType } from 'slonik';

@Service('statusModel')
class StatusModel {
  constructor(@Inject('db') private db: DatabaseConnectionType) {}
  public async getApiStatus(): Promise<string> {
    try {
      let result: any = await this.db.query(sql`SELECT * FROM status`);
      if (!result.rows.length) {
        throw new Error('Database Not Configured Properly.');
      }
      return result.rows[0].status;
    } catch (e) {
      return e;
    }
  }
}

export default StatusModel;
