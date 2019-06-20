import * as chai from 'chai';
import { expect } from 'chai';
import StatusService from './../../../src/services/status/index';
import * as sinon from 'sinon';

//require('sinon-as-promised');
chai.use(require('chai-as-promised'));

describe('Services#status', () => {
  beforeEach(() => {});

  it('Should send the status of the system', async () => {
    const userObject = { apiStatus: 'yes' };
    const StatusModelMock = {
      getApiStatus: sinon.stub().returns(userObject),
    };

    const LoggerMock = {};

    const userServiceInstance = new StatusService(StatusModelMock, LoggerMock);
    const status = await userServiceInstance.status();
    sinon.assert.calledOnce(StatusModelMock.getApiStatus);
    expect(status.apiStatus).to.be.a('object');
  });
});
