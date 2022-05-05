import { ClientStore } from './clientStore.types';

export const initialClientStore: ClientStore = {
  authentication: {
    isOnboarding: true,
    user: null,
    auth: null,
    authWeb: null
  },
  theme: 'light',
  alert: {
    open: false
  },
  toast: {
    open: false,
    config: { variant: 'success' }
  },
  isLoading: false
};
