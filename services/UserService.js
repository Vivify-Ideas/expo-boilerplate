import ApiService from './ApiService';

const ENDPOINTS = {
  SEARCH: '/user/search?term=:term&size=:size'
};

class UserService extends ApiService {
  searchUsers = ({ term, size }) =>
    this.apiClient.get(ENDPOINTS.SEARCH.replace(':term', term).replace(':size', size));
}

export const userService = new UserService();
