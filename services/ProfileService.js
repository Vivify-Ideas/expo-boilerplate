import ApiService from './ApiService';

const ENDPOINTS = {
  PROFILE: '/auth/me',
  CHANGE_PASSWORD: '/user/change-password',
  USER: '/user'
};

class ProfileService extends ApiService {
  getProfile = () => this.apiClient.get(ENDPOINTS.PROFILE);

  changePassword = data => this.apiClient.post(ENDPOINTS.CHANGE_PASSWORD, data);

  updateUser = data => {
    let formData = new FormData();
    if (data.avatar) {
      const uri = data.avatar.uri;
      const name = uri.split('/').pop();
      const type = 'image/jpeg';
      formData.append('avatar', { uri, name, type });
    }

    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    return this.apiClient.post(ENDPOINTS.USER, formData);
  };
}

export const profileService = new ProfileService();
