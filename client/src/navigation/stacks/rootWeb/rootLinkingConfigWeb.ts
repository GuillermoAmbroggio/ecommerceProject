import * as Linking from 'expo-linking';

const config = {
  screens: {
    Home: 'home',
    Account: 'account',
    Store: 'store',
    NotFound: '*',
    Orders: 'account/orders',
    OrderDetail: 'account/orders/detail',
    Address: 'account/address',
    Payments: 'account/payments'
  }
};

export const RootLinkingConfig = {
  prefixes: [Linking.makeUrl('/')],
  config
};
