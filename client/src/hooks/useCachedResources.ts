import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import fonts from 'assets/fonts/fonts';
import useClientStore from './useClientStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from 'particules/serverStore/request';

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const unmounted = React.useRef(false);

  const { dispatch } = useClientStore();
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync(): Promise<void> {
      try {
        void SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          ...fonts
        });

        // Si ya vio el onboarding
        const onboarding = await AsyncStorage.getItem('onboarding');
        if (onboarding !== null) dispatch({ type: 'FIRST_OPEN_ONBOARDING' });

        // Si existe una sesion activa token
        const auth = await AsyncStorage.getItem('auth');
        if (auth) {
          dispatch({ type: 'AUTH', payload: JSON.parse(auth) });
          getUser()
            .then((user) => {
              dispatch({ type: 'SET_USER', payload: user });
            })
            .catch(() => dispatch({ type: 'LOGOUT' }));
        }

        // Si existe una sesion activa cookie
        const authWeb = await AsyncStorage.getItem('auth_web');
        if (authWeb) {
          dispatch({ type: 'AUTH_WEB', payload: JSON.parse(authWeb) });
          getUser()
            .then((user) => {
              dispatch({ type: 'SET_USER', payload: user });
            })
            .catch(() => dispatch({ type: 'LOGOUT' }));
        }
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        void SplashScreen.hideAsync();
      }
    }
    if (!unmounted.current) {
      void loadResourcesAndDataAsync();
    }

    return () => {
      unmounted.current = true;
    };
  });

  return isLoadingComplete;
}
