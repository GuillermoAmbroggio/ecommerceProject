import { Button, Icon, Text } from 'atoms';
import { useTheme } from 'hooks';
import React from 'react';
import { View, Image } from 'react-native';
import { Layout } from 'utils';
import FirstOrderRowStyle from '../firstOrderRow/fistOrderRow.styles';
import NewsletterRowStyle from './newsletterRow.styles';

const NewsletterRow: React.FC = () => {
  const { Row } = Layout;
  const theme = useTheme();
  const styles = FirstOrderRowStyle();
  const stylesTwo = NewsletterRowStyle();

  const listText = [
    'Suscribite para recibir alertas en tu correo.',
    'Selecciona la frecuencia que más te convenga.',
    'Olvídate de estar buscando ofertas, nosotros lo hacemos por vos.'
  ];

  return (
    <Row>
      <View style={[styles.containerSection, stylesTwo.containerSection]}>
        <Text variant="bodyBold">SUSCRIPCIÓN DE OFERTAS</Text>
        <Text variant="bodyTitle" style={styles.textTitle}>
          Recibí todas nuestras ofertas de manera inmediata a tu correo
          electrónico.
        </Text>
        {listText.map((e, i) => {
          return (
            <View key={i} style={styles.containerList}>
              <Icon name="check-circle" color={theme.colors.success} />
              <Text style={styles.textList}>{e}</Text>
            </View>
          );
        })}
        <Button
          title="Subscribirme"
          containerStyle={stylesTwo.subscribeButton}
        />
      </View>
      <View style={styles.containerSection}>
        <Image
          source={require('../../../../../assets/home/web/newsletterRow.png')}
          style={stylesTwo.imageStyles}
        />
      </View>
    </Row>
  );
};

export default NewsletterRow;
