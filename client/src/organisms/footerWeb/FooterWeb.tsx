import { StackNavigationProp } from '@react-navigation/stack';
import { LogoItem } from 'molecules';
import { RootParamListWeb } from 'navigation/stacks/rootWeb/rootParamListWeb';
import React from 'react';
import { Layout } from 'utils';
import FooterInformation from './components/FooterInformation';
import FooterNetworks from './components/FooterNetworks';
import FooterWebStyle from './footerWeb.styles';

interface IFooterWebProps {
  navigation: StackNavigationProp<RootParamListWeb, 'Home'>;
}

const FooterWeb: React.FC<IFooterWebProps> = ({ navigation }) => {
  const { Row } = Layout;
  const styles = FooterWebStyle();
  return (
    <Row style={styles.container}>
      <LogoItem />
      <FooterInformation navigation={navigation} />
      <FooterNetworks />
    </Row>
  );
};

export default FooterWeb;
