import React, { useEffect } from 'react';
import { useCachedResources, useClientStore } from 'hooks';
import Navigation from 'navigation/Navigation';
import useColorScheme from 'hooks/useColorScheme';
import { LoadingScreen } from 'utils';
import './src/utils/axiosConfig/axiosConfig';
import Providers from 'providers/Providers';
import { Alert, Toast } from 'molecules';
import { Platform } from 'react-native';

export default function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const { alert, toast, dispatch, isLoading } = useClientStore();

  const handleCloseAlert: () => void = () => {
    dispatch({ type: 'ALERT', payload: { open: false } });
  };

  const handleCloseToast: () => void = () => {
    dispatch({ type: 'TOAST', payload: { open: false } });
  };

  /**
   * Bloquea el scroll del body cuando se abre una Alerta
   */
  useEffect(() => {
    if (Platform.OS === 'web') {
      if (alert.open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [alert.open]);

  if (!isLoadingComplete || isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <Providers>
        <Navigation colorScheme={colorScheme} />
        <Alert open={alert.open} {...alert.config} onClose={handleCloseAlert}>
          {alert.content}
        </Alert>

        <Toast open={toast.open} onClose={handleCloseToast} {...toast.config} />
      </Providers>
    );
  }
}
