import { Card } from 'atoms';
import { ProductItem } from 'molecules';
import { SectionCard } from 'organisms';
import React from 'react';
import { View } from 'react-native';
import SectionBestSellersStyle from './sectionBestSeller.styles';

const SectionBestSellers: React.FC = () => {
  const styles = SectionBestSellersStyle();
  const dataProducts = [
    {
      title: 'SERENEX',
      description: 'Feromonas de sincronía ',
      price: 1200,
      image:
        'https://http2.mlstatic.com/D_NQ_NP_873572-MLA44808425499_022021-O.webp'
    },
    {
      title: 'CEFTIOMAX',
      description: 'Cloridrato de ceftiofur',
      price: 1900
    }
  ];

  return (
    <SectionCard
      containerStyle={styles.container}
      title={'Los más vendidos'}
      footer={'Ver mas'}
      borderRadius={10}
      footerOnPress={() => console.log('VER MAS')}
    >
      {dataProducts.map((e, i) => {
        const image = e.image
          ? { uri: e.image }
          : require('assets/home/notImage.jpg');
        return (
          <View key={i}>
            <ProductItem
              title={e.title}
              description={e.description}
              price={e.price}
              image={image}
            />
            {i !== dataProducts.length - 1 ? <Card.Divider /> : null}
          </View>
        );
      })}
    </SectionCard>
  );
};

export default SectionBestSellers;
