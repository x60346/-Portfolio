import { defineStore } from 'pinia';

const authInfo = {
  name: '',
  profession: '',
  content: '',
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authInfo: JSON.parse(JSON.stringify(authInfo)),
  }),
  actions: {
    resetAuthInfo() {
      this.authInfo = JSON.parse(JSON.stringify(authInfo));
    },
  },
});
