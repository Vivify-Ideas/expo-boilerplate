import ApiService from './ApiService';

const ENDPOINTS = {
  PROFILE: '/auth/me'
};

class ProfileService extends ApiService {
  getProfile = () => {
    return this.apiClient.get(ENDPOINTS.PROFILE);
  };
}

export const profileService = new ProfileService();
