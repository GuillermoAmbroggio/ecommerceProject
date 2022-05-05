import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Icon, Text } from 'atoms';
import { useTheme } from 'hooks';
import { RootParamListWeb } from 'navigation/stacks/rootWeb/rootParamListWeb';
import React from 'react';
import { View, Image } from 'react-native';
import { Layout } from 'utils';
import FirstOrderRowStyle from './fistOrderRow.styles';

interface IFirstOrderRowProps {
  navigation: StackNavigationProp<RootParamListWeb, 'Home'>;
}

const FirstOrderRow: React.FC<IFirstOrderRowProps> = ({ navigation }) => {
  const { Row } = Layout;
  const theme = useTheme();
  const styles = FirstOrderRowStyle();

  const listText = [
    'Encuentra insumos para todas tus necesidades.',
    'Recibe tus productos en toda Argentina.',
    'Factura electrónica de todas tus compras.',
    'Si algún insumo no está en nuestra tienda,te ayudamos a conseguirlo.'
  ];

  return (
    <Row>
      <View style={styles.containerSection}>
        <Text variant="bodyBold">LA TIENDA AGRARIA MÁS COMPLETA</Text>
        <Text variant="bodyTitle" style={styles.textTitle}>
          Todo lo que necesitas para tu actividad agropecuaria a un solo click.
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
          title="HAZ TU PRIMER PEDIDO"
          containerStyle={styles.textTitle}
        />
      </View>
      <View style={styles.containerSection}>
        <Image
          source={require('../../../../../assets/home/web/firstOrderRow.png')}
          style={styles.imageOne}
        />
        <Image
          source={require('../../../../../assets/home/web/firstOrderRowPayment.png')}
          style={styles.imageTwo}
        />
      </View>
    </Row>
  );
};

export default FirstOrderRow;
