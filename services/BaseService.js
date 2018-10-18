import httpService from './HttpService';

class BaseService {
  constructor() {
    this.api = httpService;
    this.apiClient = this.api.client;
  }
}

export default BaseService;
