import { useScreenSize, useTheme } from 'hooks';
import { StyleSheet } from 'react-native';

interface ICard {
  container: {};
  iconStyle: {};
  imageBackground: {};
  imageStyle: {};
  separator: {};
  buttomStyle: {};
  textStyle: {};
}
interface ISectionCard {
  containerCategoryCards: {};
  containerStyle: {};
}

const CategoryCardStyle = (): ICard => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 10
    },
    iconStyle: {
      marginBottom: 8
    },
    imageBackground: {
      width: '100%',
      height: '100%'
    },
    imageStyle: {
      borderRadius: 10
    },
    separator: {
      flex: 1
    },
    buttomStyle: {
      backgroundColor: theme.colors.backgrounds.categoryCards,
      borderRadius: 10,
      minHeight: '30%',
      justifyContent: 'center',
      opacity: 0.9
    },
    textStyle: {
      textAlign: 'center',
      textAlignVertical: 'center'
    }
  });
};

export const SectionCategoryCardsStyle = (): ISectionCard => {
  const screen = useScreenSize();
  const theme = useTheme();
  const bigScreen = screen === 'big';
  return StyleSheet.create({
    containerCategoryCards: {
      paddingHorizontal: 16,
      width: bigScreen ? '100%' : undefined,
      justifyContent: 'center',
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.background
    },
    containerStyle: {
      alignSelf: 'flex-start',
      width: '100%'
    }
  });
};

export default CategoryCardStyle;
