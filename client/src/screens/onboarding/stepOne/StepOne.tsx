import React from 'react';
import { Layout } from 'utils';
import { Text } from 'atoms';
import { Tabs } from 'molecules';
import { Image } from 'react-native';
import stepsStyle from '../steps.styles';
import FooterOnboarding from '../components/footerOnboarding/FooterOnboarding';
import { OnboardingNavProps } from 'navigation/stacks/onboarding/onboardingParamList';

const StepOne: React.FC<OnboardingNavProps<'StepOne'>> = ({ navigation }) => {
  const { Column } = Layout;
  const styles = stepsStyle();

  return (
    <Layout ph={16}>
      <Column style={styles.container}>
        <Image
          source={require('assets/onboarding/step1.png')}
          style={styles.image}
        />
        <Column>
          <Text variant="bodyBold" style={styles.firstText}>
            Todos los insumos que necesitas en un mismo lugar
          </Text>
          <Text variant="bodyText" style={styles.secondText}>
            Encontra todos los productos que necesitas, sin salir de tu casa.
          </Text>
        </Column>
        <Tabs containerStyle={styles.tabs}>
          <Tabs.Tab active={true} />
          <Tabs.Tab />
          <Tabs.Tab />
        </Tabs>
      </Column>
      <FooterOnboarding
        onPressNext={() => {
          navigation.navigate('StepTwo');
        }}
      />
    </Layout>
  );
};

export default StepOne;
