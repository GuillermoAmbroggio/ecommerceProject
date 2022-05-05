import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Icon, Link, Text } from 'atoms';
import { useTheme } from 'hooks';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import React from 'react';
import { View } from 'react-native';
import HeaderAccountStyle from './headerAccount.styles';

interface IHeaderAccountProps {
  name: string;
  email: string;
  navigation: StackNavigationProp<AccountParamList, 'Account'>;
}

const HeaderAccount: React.FC<IHeaderAccountProps> = ({
  name,
  email,
  navigation
}) => {
  const theme = useTheme();
  const styles = HeaderAccountStyle();
  return (
    <View style={styles.container}>
      <Card containerStyle={[styles.containerCard]}>
        <Icon
          name="user-alt"
          color={theme.colors.primary}
          size={50}
          style={styles.iconStyle}
        />
        <View style={{ flex: 1 }}>
          <Text variant="bodyTitle">
            Bienvenido <Text variant="bodyTitle">{name}</Text>
          </Text>
          <Text>{email}</Text>

          <Link
            text="Ver mi perfil"
            variant="bodySmallBold"
            presseableStyle={styles.linkStyle}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </Card>
    </View>
  );
};

export default HeaderAccount;
