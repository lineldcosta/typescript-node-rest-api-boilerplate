import { Service, Inject } from 'typedi';

@Service()
export default class StatusService {
  constructor(@Inject('statusModel') private statusModel, @Inject('logger') private logger) {}
  public async status() {
    try {
      let apiStatus = await this.statusModel.getApiStatus();
      return {
        status: apiStatus,
      };
    } catch (e) {
      throw e;
    }
  }
}
