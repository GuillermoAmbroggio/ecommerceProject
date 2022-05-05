import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IAuth, IAuthWeb } from 'utils/types/UserTypes';

type IAxiosFetch = (
  url: string,
  options?: AxiosRequestConfig
) => Promise<AxiosResponse<any>>;

const axiosFetch: IAxiosFetch = async (url, options) => {
  const authStorage = await AsyncStorage.getItem('auth');
  const authWebStorage = await AsyncStorage.getItem('auth_web');
  /**
   * Configuraciíon para request app
   */
  if (authStorage) {
    const auth: IAuth = JSON.parse(authStorage);
    const headers = {
      ...options?.headers,
      authorization: `Bearer ${auth.accessToken}`
    };
    return await axios(url, { ...options, headers })
      .then((response) => response.data)
      .catch(async () => {
        return await axios
          .post('/refresh-token', { token: auth.refreshToken })
          .then(async (response) => {
            auth.accessToken = response.data.accessToken;
            void AsyncStorage.setItem('auth', JSON.stringify(auth));
            const headersRefresh = {
              ...options?.headers,
              authorization: `Bearer ${auth.accessToken}`
            };
            return await axios(url, {
              ...options,
              headers: headersRefresh
            }).then((value) => value.data);
          });
      });
  }

  /**
   * Configuraciíon para request web
   */
  if (authWebStorage) {
    const authWeb: IAuthWeb = JSON.parse(authWebStorage);
    const headers = {
      ...options?.headers,
      authorization: `Bearer ${authWeb.csrfToken}`
    };
    return await axios(url, {
      ...options,
      headers,
      withCredentials: true
    }).then((response) => response.data);
  }

  return await axios(url, options);
};

export default axiosFetch;
