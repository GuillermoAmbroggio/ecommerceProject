import { useWindowDimensions } from 'react-native';

export type ScreenSizes = 'small' | 'medium' | 'big';

const useScreenSize = (): ScreenSizes => {
  const windowWidth = useWindowDimensions().width;

  if (windowWidth <= 640) {
    return 'small';
  }
  if (windowWidth <= 1007) {
    return 'medium';
  }
  return 'big';
};

export default useScreenSize;
