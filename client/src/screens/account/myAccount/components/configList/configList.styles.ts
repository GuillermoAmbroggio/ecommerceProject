import { StyleSheet } from 'react-native';

interface IStyleProps {
  dividerStyle: {};
}

const ConfigListStyle = (): IStyleProps => {
  return StyleSheet.create({
    dividerStyle: { marginVertical: 8 }
  });
};

export default ConfigListStyle;
