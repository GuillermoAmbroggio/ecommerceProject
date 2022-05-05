import { StackNavigationProp } from '@react-navigation/stack';
import { Icon, Line, Text } from 'atoms';
import { RootParamListWeb } from 'navigation/stacks/rootWeb/rootParamListWeb';
import React from 'react';
import { Layout } from 'utils';
import FooterComponentStyle from './footerComponents.styles';

interface IFooterInformationProps {
  navigation: StackNavigationProp<RootParamListWeb, 'Home'>;
}

const FooterInformation: React.FC<IFooterInformationProps> = ({
  navigation
}) => {
  const styles = FooterComponentStyle();

  const { Row, Column } = Layout;
  const informationList = [
    'Nostros',
    'Terminos y condiciones',
    'Seguridad y privacidad',
    'Ayuda',
    'Defensa al consumidor'
  ];
  const contactList = [
    { title: 'Dirección', value: 'Una dirección', icon: 'map-marker-alt' },
    { title: 'Email', value: 'soporte@agroinc.com.ar', icon: 'envelope' },
    { title: 'Télefono', value: '+54 11 5566988', icon: 'phone-alt' }
  ];

  return (
    <Row>
      <Column style={styles.firstColumn}>
        <Text variant="bodyBold">INFORMACIÓN</Text>
        <Line sizeWidth={2} style={styles.lineStyle} />
        {informationList.map((e, i) => (
          <Row key={i} style={styles.containerRow}>
            <Icon name="circle" size={12} />
            <Text style={styles.textStyle} variant="bodySmall">
              {e}
            </Text>
          </Row>
        ))}
      </Column>
      <Column>
        <Text variant="bodyBold">CONTACTO</Text>
        <Line sizeWidth={2} style={styles.lineStyle} />
        {contactList.map((e, i) => (
          <Row key={i} style={styles.containerRow}>
            <Icon name={e.icon} size={12} />
            <Text variant="bodySmallBold" style={styles.textStyle}>
              {e.title}:{' '}
            </Text>
            <Text variant="bodySmall">{e.value}</Text>
          </Row>
        ))}
      </Column>
    </Row>
  );
};

export default FooterInformation;
