import { Icon, Text } from 'atoms';
import { useTheme } from 'hooks';
import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Layout } from 'utils';
import FirstOrderRowStyle from '../firstOrderRow/fistOrderRow.styles';
import DownloadAppRowStyle from './downloadAppRow.styles';

const DownloadAppRow: React.FC = () => {
  const { Row } = Layout;
  const theme = useTheme();
  const styles = FirstOrderRowStyle();
  const stylesTwo = DownloadAppRowStyle();

  const listText = [
    'Todos los insumos que necesitas en un solo lugar.',
    'Contáctanos, estamos para ayudarte.',
    'Rastrea tus órdenes en todo momento.',
    'Agrega recordatorios para comprar tus insumos recurrentes.'
  ];

  return (
    <Row>
      <View style={styles.containerSection}>
        <Image
          source={require('../../../../../assets/home/web/downloadAppRow.png')}
          style={stylesTwo.imageStyle}
        />
      </View>
      <View style={[styles.containerSection, stylesTwo.containerSection]}>
        <Text variant="bodyBold">NUESTRA APLICACIÓN MÓVIL</Text>
        <Text variant="bodyTitle" style={styles.textTitle}>
          Disfruta de una mejor experiencia descargando nuestra app.
        </Text>
        {listText.map((e, i) => {
          return (
            <View key={i} style={styles.containerList}>
              <Icon name="check-circle" color={theme.colors.success} />
              <Text style={styles.textList}>{e}</Text>
            </View>
          );
        })}
        <Row style={stylesTwo.containerButtons}>
          <Pressable>
            <Image
              source={require('../../../../../assets/home/web/downloadIosStore.png')}
              style={stylesTwo.imageButtonStore}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../../../../../assets/home/web/downloadAndroidStore.png')}
              style={stylesTwo.imageButtonStore}
            />
          </Pressable>
        </Row>
      </View>
    </Row>
  );
};

export default DownloadAppRow;
