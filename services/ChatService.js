import ApiService from './ApiService';

const ENDPOINTS = {
  START_CHAT: '/chats/start'
};

class ChatService extends ApiService {
  createChat = data => this.apiClient.post(ENDPOINTS.START_CHAT, data);
}

export const chatService = new ChatService();
