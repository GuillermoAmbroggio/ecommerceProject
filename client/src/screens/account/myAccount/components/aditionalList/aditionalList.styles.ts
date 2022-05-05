import { StyleSheet } from 'react-native';

interface IStyleProps {
  dividerStyle: {};
}

const AditionalListStyle = (): IStyleProps => {
  return StyleSheet.create({
    dividerStyle: { marginVertical: 8 }
  });
};

export default AditionalListStyle;
