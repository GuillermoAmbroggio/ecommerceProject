import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'hooks';
import React, { Suspense } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LoadingScreen } from 'utils';
import ReactQueryProvider from './reactQueryProvider/ReactQueryProvider';

const Providers: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <ReactQueryProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
            style="dark"
            backgroundColor={theme.colors.header.background}
          />
          <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        </SafeAreaView>
      </SafeAreaProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
