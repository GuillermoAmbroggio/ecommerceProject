import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Card } from 'atoms';
import { useClientStore, useScreenSize } from 'hooks';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import { useLogout } from 'particules/serverStore/mutations';
import React from 'react';
import { ScrollView } from 'react-native';
import { Layout } from 'utils';
import { IUser } from 'utils/types/UserTypes';
import Profile from '../profile/Profile';
import AditionalList from './components/aditionalList/AditionalList';
import ConfigList from './components/configList/ConfigList';
import HeaderAccount from './components/headerAccount/HeaderAccount';
import OrderList from './components/ordersList/OrderList';

interface IMyAccountProps {
  navigation: StackNavigationProp<AccountParamList, 'Account'>;
  user: IUser;
}

const MyAccount: React.FC<IMyAccountProps> = ({ user, navigation }) => {
  const { authentication } = useClientStore();
  const { mutate, isLoading } = useLogout();
  const { Content, Column } = Layout;

  const screen = useScreenSize();
  return (
    <ScrollView>
      <Content style={{ paddingBottom: screen === 'big' ? 60 : 24 }}>
        {screen === 'small' ? (
          <HeaderAccount
            name={user.name}
            email={user.email}
            navigation={navigation}
          />
        ) : null}
        <Column
          ph={16}
          style={{
            flexDirection: screen === 'big' ? 'row' : 'column',
            justifyContent: screen === 'big' ? 'center' : undefined,
            marginTop: screen === 'big' ? 60 : undefined
          }}
        >
          <Column>
            <OrderList navigation={navigation} />
            <ConfigList
              navigation={navigation}
              containerStyle={{ marginVertical: 24 }}
              profile={screen === 'big'}
            />
            <AditionalList />

            {screen !== 'big' ? (
              <Button
                title="Cerrar sesión"
                type="tertiary"
                stretch={true}
                containerStyle={{ marginTop: 16 }}
                onPress={() => mutate(authentication.auth?.refreshToken)}
                isLoading={isLoading}
              />
            ) : null}
          </Column>
          {screen === 'big' ? (
            <Card
              containerStyle={{ borderRadius: 10, width: 600, marginLeft: 48 }}
            >
              <Profile />
            </Card>
          ) : null}
        </Column>
      </Content>
    </ScrollView>
  );
};

export default MyAccount;
