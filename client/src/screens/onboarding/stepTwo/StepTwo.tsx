import React from 'react';
import { Layout } from 'utils';
import { Text } from 'atoms';
import { Tabs } from 'molecules';
import { Image } from 'react-native';
import stepsStyle from '../steps.styles';
import FooterOnboarding from '../components/footerOnboarding/FooterOnboarding';
import { OnboardingNavProps } from 'navigation/stacks/onboarding/onboardingParamList';

const StepTwo: React.FC<OnboardingNavProps<'StepTwo'>> = ({ navigation }) => {
  const { Column } = Layout;
  const styles = stepsStyle();
  return (
    <Layout ph={16}>
      <Column style={styles.container}>
        <Image
          source={require('assets/onboarding/step2.png')}
          style={styles.image}
        />
        <Column>
          <Text variant="bodyBold" style={styles.firstText}>
            Contáctanos, estamos para ayudarte
          </Text>
          <Text variant="bodyText" style={styles.secondText}>
            No descansaremos hasta que recibas tu pedido.
          </Text>
        </Column>
        <Tabs containerStyle={styles.tabs}>
          <Tabs.Tab />
          <Tabs.Tab active={true} />
          <Tabs.Tab />
        </Tabs>
      </Column>
      <FooterOnboarding onPressNext={() => navigation.navigate('StepThree')} />
    </Layout>
  );
};

export default StepTwo;
