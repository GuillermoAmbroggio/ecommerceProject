import { Icon, Line, Text } from 'atoms';
import React from 'react';
import { Pressable } from 'react-native';
import { Layout } from 'utils';
import FooterComponentStyle from './footerComponents.styles';

const FooterNetworks: React.FC = () => {
  const styles = FooterComponentStyle();
  const { Row, Column } = Layout;
  const socialNetworsList = [
    { title: 'face', link: 'http://fb.com', icon: 'facebook-square' },
    { title: 'twitter', link: 'http://twitter.com', icon: 'twitter-square' },
    { title: 'ig', link: 'http://instagram.com', icon: 'instagram-square' }
  ];
  return (
    <Column>
      <Text variant="bodyBold">Nuestras redes</Text>
      <Line sizeWidth={2} style={styles.lineStyle} />
      <Row>
        {socialNetworsList.map((e, i) => (
          <Pressable
            key={i}
            style={[
              // eslint-disable-next-line react-native/no-inline-styles
              {
                marginLeft: i === 0 ? undefined : 8
              },
              styles.containerIcons
            ]}
          >
            <Icon name={e.icon} />
          </Pressable>
        ))}
      </Row>
    </Column>
  );
};

export default FooterNetworks;
