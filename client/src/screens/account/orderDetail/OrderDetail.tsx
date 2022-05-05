import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useScreenSize } from 'hooks';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import { RootParamList } from 'navigation/stacks/root/rootParamList';
import AccountMenu from 'organisms/accountMenu/AccountMenu';
import React from 'react';
import { ScrollView } from 'react-native';
import { IOrderDetail } from 'utils/types/OrderTypes';
import CardDeliveryDetail from './components/cardDeliveryDetail/CardDeliveryDetail';
import CardOrderDetail from './components/cardOrderDetail/CardOrderDetail';
import CardPaymentDetail from './components/cardPaymentDetail/CardPaymentDetail';
import CardProductsDetail from './components/cardProductsDetail/CardProductsDetail';

interface IorderDetailProps {
  route: RouteProp<RootParamList, 'OrderDetail'>;
  navigation: StackNavigationProp<AccountParamList, 'OrderDetail'>;
}

const OrderDetail: React.FC<IorderDetailProps> = ({ route, navigation }) => {
  const orderId = route.params.orderId;
  const screen = useScreenSize();
  const isBig = screen === 'big';
  const deliveryDate = new Date('2021-11-15T23:13:57.709Z');
  const orderCreateDate = new Date('2021-10-31T23:13:57.709Z');
  console.log('ORDER DETAIL ', { orderId });

  const dataOrder: IOrderDetail = {
    id: 1,
    subTotal: 3100,
    total: 3500,
    status: 'incoming',
    shipping: {
      method: 'correo',
      estimatedDelivery: deliveryDate,
      price: 400,
      address: {
        id: 1,
        street: 'av las heras',
        streetNumber: '50',
        apartment: '1D',
        zipCode: '5000',
        city: 'Cordoba',
        state: 'Cordoba',
        aditionalInformation: 'entre calle 1 y calle 2'
      }
    },
    /*     store: {
      id: 1,
      address: 'Direccion del local',
      atentionTime: '09:00 a 18:00 hs',
      city: 'Córdoba',
      state: 'Córdoba',
      zipCode: '5000'
    }, */
    payment: {
      id: 55,
      option: 'cash',
      /*  card: {
        cardName: 'visa',
        lastNumbers: 5968,
        feesAmount: 6,
        fess: 583.33
      }, */
      /*     bank: {
        fromCbu: '1234567891234567891234',
        fromName: 'guillermo',
        nameBank: 'brubank'
      }, */
      datePay: orderCreateDate,
      status: 'unpaid'
    },
    dateCreateOrder: orderCreateDate,
    // dateFinishOrder: orderCreateDate,
    products: [
      {
        id: 1,
        title: 'SERENEX',
        price: 1200,
        image:
          'https://http2.mlstatic.com/D_NQ_NP_873572-MLA44808425499_022021-O.webp',
        quantity: 1
      },
      {
        id: 2,
        title: 'CEFTIOMAX',
        price: 1900,
        quantity: 2
      }
    ],
    totalProducts: 3
  };

  return (
    <AccountMenu navigation={navigation}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: isBig ? 60 : 24,
          paddingHorizontal: 16
        }}
      >
        <CardOrderDetail
          dataOrder={dataOrder}
          style={{ marginBottom: isBig ? 32 : 16 }}
        />
        <CardProductsDetail
          products={dataOrder.products}
          style={{ marginBottom: isBig ? 32 : 16 }}
        />

        <CardPaymentDetail
          payment={dataOrder.payment}
          total={dataOrder.total}
          style={{ marginBottom: isBig ? 32 : 16 }}
        />
        <CardDeliveryDetail
          shipping={dataOrder.shipping}
          store={dataOrder.store}
          // style={{ flex: 1, marginLeft: 16 }}
        />
      </ScrollView>
    </AccountMenu>
  );
};

export default OrderDetail;
