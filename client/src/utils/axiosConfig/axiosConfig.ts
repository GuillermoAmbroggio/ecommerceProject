import axios from 'axios';
import { API_KEY_APP, API_KEY_WEB, API_URL } from '@env';
import { Platform } from 'react-native';

axios.defaults.baseURL = API_URL;
axios.interceptors.request.use((config) => {
  config.headers['X-Api-Key'] =
    Platform.OS === 'web' ? API_KEY_WEB : API_KEY_APP;
  config.withCredentials = true;

  return config;
});
