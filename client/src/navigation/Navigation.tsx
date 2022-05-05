import React, { useEffect, useRef } from 'react';
import { ColorSchemeName, Platform } from 'react-native';
import RootStack from './stacks/root/RootStack';
import OnboardingStack from './stacks/onboarding/OnboardingStack';
import { useClientStore } from 'hooks';
import useScreenSize from 'hooks/useScreenSize';
import RootStackWeb from './stacks/rootWeb/RootStackWeb';

interface INavigationProps {
  colorScheme: ColorSchemeName;
}

const Navigation = ({ colorScheme }: INavigationProps): JSX.Element => {
  const screen = useScreenSize();
  const unmounted = useRef(false);
  const { authentication } = useClientStore();
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  if (authentication.isOnboarding && Platform.OS !== 'web') {
    return <OnboardingStack colorScheme={colorScheme} />;
  } else {
    if (!unmounted.current) {
      if (screen === 'small') {
        return <RootStack colorScheme={colorScheme} />;
      } else {
        return <RootStackWeb colorScheme={colorScheme} />;
      }
    } else {
      return <RootStack colorScheme={colorScheme} />;
    }
  }
};

export default Navigation;
