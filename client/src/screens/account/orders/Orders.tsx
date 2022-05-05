import { StackNavigationProp } from '@react-navigation/stack';
import { useScreenSize } from 'hooks';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import AccountMenu from 'organisms/accountMenu/AccountMenu';
import React from 'react';
import { FlatList } from 'react-native';
import { IStatusOrders } from 'utils/types/OrderTypes';
import OrderCard from './components/orderCard/OrderCard';

export type DataProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
};

export type DataOrders = Array<{
  id: number;
  price: number;
  status: IStatusOrders;
  arrivedDate: Date;
  products: DataProduct[];
}>;

interface IOrdersProps {
  navigation: StackNavigationProp<AccountParamList, 'Orders'>;
}

const Orders: React.FC<IOrdersProps> = ({ navigation }) => {
  const arrivedDate = new Date('2021-11-15T23:13:57.709Z');
  const isBig = useScreenSize() === 'big';
  const data: DataOrders = [
    {
      id: 1,
      price: 3100,
      status: 'completed',
      arrivedDate,
      products: [
        {
          id: 1,
          title: 'SERENEX',
          description: 'Feromonas de sincronía ',
          price: 1200,
          image:
            'https://http2.mlstatic.com/D_NQ_NP_873572-MLA44808425499_022021-O.webp'
        },
        {
          id: 2,
          title: 'CEFTIOMAX',
          description: 'Cloridrato de ceftiofur',
          price: 1900
        }
      ]
    },
    {
      id: 6,
      price: 3100,
      status: 'ready',
      arrivedDate,
      products: [
        {
          id: 1,
          title: 'SERENEX',
          description: 'Feromonas de sincronía ',
          price: 1200,
          image:
            'https://http2.mlstatic.com/D_NQ_NP_873572-MLA44808425499_022021-O.webp'
        }
      ]
    },
    {
      id: 3,
      price: 3100,
      status: 'canceled',
      arrivedDate,
      products: [
        {
          id: 3,
          title: 'Product 8',
          description: 'Cloridrato de ceftiofur',
          price: 1900
        },
        {
          id: 1,
          title: 'SERENEX',
          description: 'Feromonas de sincronía ',
          price: 1200,
          image:
            'https://http2.mlstatic.com/D_NQ_NP_873572-MLA44808425499_022021-O.webp'
        },
        {
          id: 2,
          title: 'CEFTIOMAX',
          description: 'Cloridrato de ceftiofur',
          price: 1900
        }
      ]
    }
  ];

  return (
    <AccountMenu navigation={navigation}>
      <FlatList
        data={data}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingVertical: isBig ? 60 : 24
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <OrderCard
              index={index}
              id={item.id}
              status={item.status}
              arriveDate={item.arrivedDate}
              products={item.products}
              containerStyle={{ marginBottom: isBig ? 30 : 16 }}
              navigation={navigation}
            />
          );
        }}
      />
    </AccountMenu>
  );
};

export default Orders;
