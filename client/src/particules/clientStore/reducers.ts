import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from './actions';
import { ClientStore } from './clientStore.types';

const reducer = (draft: ClientStore, action: Actions): void => {
  switch (action.type) {
    case 'FIRST_OPEN_ONBOARDING':
      void AsyncStorage.setItem('onboarding', JSON.stringify(false));
      draft.authentication.isOnboarding = false;
      break;

    case 'LOGOUT':
      void AsyncStorage.removeItem('cart');
      void AsyncStorage.removeItem('user');
      void AsyncStorage.removeItem('auth');
      void AsyncStorage.removeItem('auth_web');
      draft.authentication.user = null;
      draft.authentication.auth = null;
      draft.authentication.authWeb = null;

      break;

    case 'AUTH': {
      const { accessToken, refreshToken } = action.payload;
      draft.authentication.auth = action.payload;
      void AsyncStorage.setItem(
        'auth',
        JSON.stringify({
          accessToken,
          refreshToken
        })
      );
      break;
    }

    case 'AUTH_WEB': {
      const { csrfToken } = action.payload;
      draft.authentication.authWeb = { csrfToken };
      void AsyncStorage.setItem(
        'auth_web',
        JSON.stringify({
          csrfToken
        })
      );
      break;
    }

    case 'SET_USER': {
      const user = action.payload;
      draft.authentication.user = user;
      break;
    }
    case 'CHANGE_THEME':
      draft.theme = draft.theme === 'light' ? 'dark' : 'light';
      break;

    case 'ALERT': {
      const { config, open, content } = action.payload;
      draft.alert.config = config;
      draft.alert.content = content;
      draft.alert.open = open;
      break;
    }

    case 'TOAST': {
      const { config, open } = action.payload;
      draft.toast.config = config;
      draft.toast.open = open;
      break;
    }

    case 'LOADING': {
      draft.isLoading = action.payload;
      break;
    }
    default:
      throw new Error('Invalid action type');
  }
};

export default reducer;
