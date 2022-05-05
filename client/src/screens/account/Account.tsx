import { StackNavigationProp } from '@react-navigation/stack';
import { useClientStore } from 'hooks';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import React from 'react';
import { Layout } from 'utils';
import EmptyAccount from './emptyAccount/EmptyAccount';
import MyAccount from './myAccount/MyAccount';

interface IAccountProps {
  navigation: StackNavigationProp<AccountParamList, 'Account'>;
}

const Account: React.FC<IAccountProps> = ({ navigation }) => {
  const { authentication } = useClientStore();
  return (
    <Layout>
      {authentication.user ? (
        <MyAccount navigation={navigation} user={authentication.user} />
      ) : (
        <EmptyAccount navigation={navigation} />
      )}
    </Layout>
  );
};

export default Account;
