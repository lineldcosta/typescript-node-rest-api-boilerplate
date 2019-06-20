import { Service, Inject } from 'typedi';

@Service()
export default class StatusService {
  constructor(@Inject('statusModel') private statusModel, @Inject('logger') private logger) {}
  public async status() {
    try {
      let apiStatus = await this.statusModel.getApiStatus();
      return {
        apiStatus: apiStatus,
      };
    } catch (e) {
      throw e;
    }
  }
}
