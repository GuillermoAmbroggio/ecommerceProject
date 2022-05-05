import { useScreenSize } from 'hooks';
import React from 'react';
import AditionalList from 'screens/account/myAccount/components/aditionalList/AditionalList';
import ConfigList from 'screens/account/myAccount/components/configList/ConfigList';
import OrderList from 'screens/account/myAccount/components/ordersList/OrderList';
import { Layout } from 'utils';

interface IAccountMenuProps {
  navigation: any;
  title?: string;
}

const AccountMenu: React.FC<IAccountMenuProps> = ({
  children,
  navigation,
  title
}) => {
  const { Content, Column } = Layout;
  const screen = useScreenSize();
  const isBig = screen === 'big';
  return (
    <Content>
      {isBig ? (
        <Column
          ph={16}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 60
          }}
        >
          <Column style={{ paddingTop: 60 }}>
            <OrderList navigation={navigation} />
            <ConfigList
              navigation={navigation}
              containerStyle={{ marginVertical: 24 }}
              profile
            />
            <AditionalList />
          </Column>

          <Column style={{ width: 600, marginLeft: 32 }}>{children}</Column>
        </Column>
      ) : (
        children
      )}
    </Content>
  );
};

export default AccountMenu;
