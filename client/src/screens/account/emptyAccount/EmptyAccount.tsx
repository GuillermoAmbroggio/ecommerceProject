import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Icon, Text } from 'atoms';
import { useScreenSize, useTheme } from 'hooks';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Layout } from 'utils';
import EmptyAccountStyle from './emptyAccount.styles';

interface IEmptyAccountProps {
  navigation: StackNavigationProp<AccountParamList, 'Account'>;
}
const EmptyAccount: React.FC<IEmptyAccountProps> = ({ navigation }) => {
  const listInfo = [
    'Todos los insumos que necesitas en un solo lugar.',
    'Contáctanos, estamos para ayudarte.',
    'Rastrea tus órdenes en todo momento.',
    'Agrega recordatorios para comprar tus insumos recurrentes.'
  ];
  const { Content, Column } = Layout;
  const theme = useTheme();
  const styles = EmptyAccountStyle();
  const screen = useScreenSize();
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1
      }}
    >
      <Content ph={16} style={[styles.container]}>
        <Column style={{ alignItems: 'center' }}>
          <Image
            source={require('assets/account/emptyAccount.png')}
            style={styles.imageWeb}
          />

          <Text variant="bodyTitle" style={styles.textTitle}>
            Iniciar sesión para obtener una mejor experiencia
          </Text>
          {listInfo.map((e, i) => (
            <View style={[styles.containerItems]} key={i}>
              <Icon
                name="check-circle"
                color={theme.colors.success}
                size={16}
              />
              <Text style={styles.itemsText}>{e}</Text>
            </View>
          ))}
        </Column>
        {screen !== 'big' ? (
          <Column style={{ alignSelf: 'stretch', marginBottom: 24 }}>
            <Button
              title="INICIAR SESIÓN"
              containerStyle={[styles.buttonStyle, styles.mgBottom]}
              type="secondary"
              onPress={() => navigation.navigate('Login')}
            />

            <Button
              title="CREAR CUENTA"
              containerStyle={styles.buttonStyle}
              type="primary"
              onPress={() => navigation.navigate('Register')}
            />
          </Column>
        ) : null}
      </Content>
    </ScrollView>
  );
};

export default EmptyAccount;
