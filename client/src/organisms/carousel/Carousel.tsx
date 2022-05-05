import { useScreenSize, useTheme } from 'hooks';
import React from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
import Swiper from '../../../patches/react-native-web-swiper';

interface ICarouselProps {
  sliders?: Array<{ title: string; source: ImageSourcePropType }>;
}

const Carousel: React.FC<ICarouselProps> = ({ sliders }) => {
  const theme = useTheme();
  const screen = useScreenSize();
  const bigScreen = screen === 'big';
  sliders = sliders ?? [
    { title: 'one', source: require('assets/home/carousel/promoOne.jpg') },
    { title: 'two', source: require('assets/home/carousel/promoTwo.jpg') },
    { title: 'three', source: require('assets/home/carousel/promoThree.jpg') }
  ];

  return (
    <Swiper
      from={1}
      loop
      timeout={6}
      controlsProps={{
        dotsTouchable: true,
        dotActiveStyle: { backgroundColor: theme.colors.primary },
        dotProps: {
          containerStyle: {
            marginHorizontal: 8
          },
          badgeStyle: { width: 12, height: 12 }
        },
        prevPos: 'left',
        nextPos: 'right',
        nextTitle: '>',
        nextTitleStyle: {
          color: theme.colors.primary,
          fontSize: bigScreen ? 54 : 24,
          fontWeight: '700',
          marginRight: bigScreen ? 24 : 0
        },
        prevTitle: '<',
        prevTitleStyle: {
          color: theme.colors.primary,
          fontSize: bigScreen ? 54 : 24,
          fontWeight: '700',
          marginLeft: bigScreen ? 24 : 0
        }
      }}
    >
      {sliders?.map((e, i) => {
        return (
          <View
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
            key={i}
          >
            <Image
              source={e.source}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 10
              }}
            />
          </View>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
