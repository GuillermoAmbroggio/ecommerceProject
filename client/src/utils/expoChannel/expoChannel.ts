import Constants from 'expo-constants';

type IExpoChannel = () => 'production' | 'beta' | 'development';

const expoChannel: IExpoChannel = () => {
  switch (Constants.manifest?.releaseChannel) {
    case 'default':
      return 'production';
    case 'beta':
      return 'beta';
    default:
      return 'development';
  }
};
export default expoChannel;
