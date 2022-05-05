import React from 'react';
import { Layout } from 'utils';
import { Text } from 'atoms';
import { Tabs } from 'molecules';
import { Image } from 'react-native';
import stepsStyle from '../steps.styles';
import { OnboardingNavProps } from 'navigation/stacks/onboarding/onboardingParamList';
import FooterOnboarding from '../components/footerOnboarding/FooterOnboarding';

const StepThree: React.FC<OnboardingNavProps<'StepThree'>> = ({
  navigation
}) => {
  const { Column } = Layout;
  const styles = stepsStyle();
  return (
    <Layout ph={16}>
      <Column style={styles.container}>
        <Image
          source={require('assets/onboarding/step3.png')}
          style={styles.image}
        />
        <Column>
          <Text variant="bodyBold" style={styles.firstText}>
            Rastrea tus órdenes en todo momento
          </Text>
          <Text variant="bodyText" style={styles.secondText}>
            Encontra todos los productos que necesitas, sin salir de tu casa.
          </Text>
        </Column>
        <Tabs containerStyle={styles.tabs}>
          <Tabs.Tab />
          <Tabs.Tab />
          <Tabs.Tab active={true} />
        </Tabs>
      </Column>
      <FooterOnboarding />
    </Layout>
  );
};

export default StepThree;
