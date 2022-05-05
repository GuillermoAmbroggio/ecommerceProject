import { StackNavigationProp } from '@react-navigation/stack';
import { useScreenSize } from 'hooks';
import { RootParamListWeb } from 'navigation/stacks/rootWeb/rootParamListWeb';
import React from 'react';
import { Pressable, ScrollView, StyleProp, ViewStyle } from 'react-native';
import CategoryCards from './CategoryCards';
import { SectionCategoryCardsStyle } from './categoryCards.styles';

interface ISectionCategoryCards {
  containerStyle?: StyleProp<ViewStyle>;
  navigation: StackNavigationProp<RootParamListWeb, 'Home'>;
}

const SectionCategoryCards: React.FC<ISectionCategoryCards> = ({
  containerStyle,
  navigation
}) => {
  const styles = SectionCategoryCardsStyle();
  const screen = useScreenSize();
  const mrCategoryCards = screen === 'big' ? 24 : 16;
  const categoryData = [
    {
      image: require('assets/home/category/promotions.jpg'),
      nameCategory: 'OFERTAS'
    },
    {
      image: require('assets/home/category/smallpets.jpg'),
      nameCategory: 'PEQUEÑOS ANIMALES'
    },
    {
      image: require('assets/home/category/bigpets.jpg'),
      nameCategory: 'GRANDES ANIMALES'
    },
    {
      image: require('assets/home/category/equin.jpg'),
      nameCategory: 'EQUINO'
    }
  ];
  return (
    <ScrollView
      contentContainerStyle={[styles.containerCategoryCards, containerStyle]}
      horizontal={true}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      style={styles.containerStyle}
    >
      {categoryData.map((e, i) => (
        <Pressable
          style={{
            marginRight: i === categoryData.length - 1 ? 0 : mrCategoryCards
          }}
          onPress={() =>
            navigation.navigate('Store', { defaultSearch: e.nameCategory })
          }
          key={i}
        >
          <CategoryCards
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              width: 120,
              height: 130
            }}
            image={e.image}
            nameCategory={e.nameCategory}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default SectionCategoryCards;
