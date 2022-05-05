import { Button } from 'atoms';
import { useClientStore } from 'hooks';
import React from 'react';
import { View } from 'react-native';
import footerOnboardingStyle from './footerOnboarding.style';

interface IFooterOnboardingProps {
  onPressNext?: () => void;
}

const FooterOnboarding: React.FC<IFooterOnboardingProps> = ({
  onPressNext
}) => {
  const { dispatch } = useClientStore();
  const styles = footerOnboardingStyle();
  const handleOmitir = (): void => {
    dispatch({ type: 'FIRST_OPEN_ONBOARDING' });
  };
  return (
    <View style={styles.buttons}>
      <Button
        title="Omitir"
        type="tertiary"
        onPress={() => {
          handleOmitir();
        }}
      />
      <Button
        title="Continuar"
        onPress={() => {
          if (onPressNext !== undefined) {
            onPressNext();
          } else {
            handleOmitir();
          }
        }}
      />
    </View>
  );
};

export default FooterOnboarding;
