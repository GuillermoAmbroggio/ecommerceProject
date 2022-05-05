import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'atoms';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import AccountMenu from 'organisms/accountMenu/AccountMenu';
import React from 'react';
import { View } from 'react-native';
import EmptyInvoicing from './components/emptyInvoicing/EmptyInvoicing';

interface IInvoicingProps {
  navigation: StackNavigationProp<AccountParamList, 'Invoicing'>;
}

const Invoicing: React.FC<IInvoicingProps> = ({ navigation }) => {
  const isEmptyInvoicing = true;
  if (isEmptyInvoicing) {
    return (
      <AccountMenu navigation={navigation}>
        <EmptyInvoicing />
      </AccountMenu>
    );
  }
  return (
    <>
      <AccountMenu navigation={navigation}>
        <View>
          <Text>Aca mostrar los datos de facturación</Text>
        </View>
      </AccountMenu>
    </>
  );
};

export default Invoicing;
