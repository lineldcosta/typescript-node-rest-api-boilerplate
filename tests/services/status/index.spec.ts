import StatusService from './../../../src/services/status/index';

describe('Services#status', () => {
  beforeEach(() => {});

  it('Should send the status of the system', async done => {
    const userObject = { apiStatus: 'yes' };
    const StatusModelMock = {
      getApiStatus: jest.fn().mockReturnValue(userObject),
    };

    const LoggerMock = {};

    const userServiceInstance = new StatusService(StatusModelMock, LoggerMock);
    const status = await userServiceInstance.status();
    expect(StatusModelMock.getApiStatus).toHaveBeenCalledTimes(1);
    expect(typeof status.status).toBe('object');
    done();
  });
});
