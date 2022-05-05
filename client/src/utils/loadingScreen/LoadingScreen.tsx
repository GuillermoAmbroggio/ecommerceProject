import { useTheme } from 'hooks';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import loadingScreenStyle from './loadingScreen.style';

interface ILoadingScreenProps {
  size?: number;
  color?: string;
}

const LoadingScreen: React.FC<ILoadingScreenProps> = ({ size = 50, color }) => {
  const theme = useTheme();
  const styles = loadingScreenStyle();
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size}
        color={color ?? theme.colors.header.background}
      />
    </View>
  );
};

export default LoadingScreen;
