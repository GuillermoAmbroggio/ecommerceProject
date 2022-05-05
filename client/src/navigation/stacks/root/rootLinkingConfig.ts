import * as Linking from 'expo-linking';

const config = {
  screens: {
    Root: {
      path: '/',
      screens: {
        HomeStack: {
          path: 'home',
          screens: {
            Home: ''
          }
        },
        Account: 'account',
        Cart: {
          path: 'cart',
          screens: {
            TabTwoScreen: 'two'
          }
        }
      }
    },
    Profile: 'account/profile',
    Login: 'account/login',
    Register: 'account/register',
    NotFound: '*'
  }
};

export const RootLinkingConfig = {
  prefixes: [Linking.makeUrl('/')],
  config
};
