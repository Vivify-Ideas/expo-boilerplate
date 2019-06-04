import ApiService from './ApiService';

const ENDPOINTS = {
  PROFILE: '/auth/me',
  CHANGE_PASSWORD: '/user/change-password'
};

class ProfileService extends ApiService {
  getProfile = () => {
    return this.apiClient.get(ENDPOINTS.PROFILE);
  };

  changePassword = data => {
    return this.apiClient.post(ENDPOINTS.CHANGE_PASSWORD, data);
  };
}

export const profileService = new ProfileService();
