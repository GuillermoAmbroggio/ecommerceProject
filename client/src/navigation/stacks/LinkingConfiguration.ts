import * as Linking from 'expo-linking';

const config = {
  screens: {
    Root: {
      path: '/',
      screens: {
        Home: {
          path: 'home',
          screens: {
            TabOneScreen: 'one',
          },
        },
        Cart: {
          path: 'cart',
          screens: {
            TabTwoScreen: 'two',
          },
        },
      },
    },
    Onboarding: {
      path: '/onboarding',
      screens: {
        StepOne: {
          path: 'stepone',
        },
        StepTwo: 'steptwo',
      },
    },
    NotFound: '*',
  },
};

export const LinkingConfiguration = {
  prefixes: [Linking.makeUrl('/')],
  config,
};
