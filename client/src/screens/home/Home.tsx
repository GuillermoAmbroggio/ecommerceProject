import React from 'react';
import { useScreenSize } from 'hooks';
import { FooterWeb, InputSearch } from 'organisms';
import NavBar from '../../organisms/navBar/NavBar';
import Carousel from 'organisms/carousel/Carousel';
import { View } from 'react-native';
import { Layout } from 'utils';
import homeStyle from './home.styles';
import { Text } from 'atoms';
import SectionCategoryCards from './components/categoryCards/SectionCategoryCards';
import { ScrollView } from 'react-native-gesture-handler';
import SectionBestSellers from './components/sectionBestSellers/SectionBestSellers';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamListWeb } from 'navigation/stacks/rootWeb/rootParamListWeb';
import FirstOrderRow from './components/web/firstOrderRow/FirstOrderRow';
import DownloadAppRow from './components/web/downloadAppRow/DownloadAppRow';
import NewsletterRow from './components/web/newsletterRow/NewsletterRow';
interface IHomeProps {
  navigation: StackNavigationProp<RootParamListWeb, 'Home'>;
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {
  const screen = useScreenSize();
  const isBig = screen === 'big';
  const styles = homeStyle();

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        {screen === 'small' ? <NavBar navigation={navigation} /> : null}
        <View>
          {isBig ? (
            <View style={[styles.containerSearchWeb]}>
              <Text variant="bodyTitle">
                Te ayudamos a encontrar todos tus insumos en un solo lugar.
              </Text>
              <InputSearch
                inputContainerStyle={styles.inputSearchWeb}
                globalContainerStyle={styles.inputContainerSearchWeb}
              />
            </View>
          ) : null}
        </View>

        <SectionCategoryCards
          navigation={navigation}
          containerStyle={styles.containerCategories}
        />

        <View style={[styles.containerCarousel]}>
          <Carousel />
        </View>
        {!isBig ? <SectionBestSellers /> : null}

        {isBig ? (
          <View style={styles.containerSectionWeb}>
            <FirstOrderRow navigation={navigation} />
            <DownloadAppRow />
            <NewsletterRow />
          </View>
        ) : null}
        {isBig ? <FooterWeb navigation={navigation} /> : null}
        {/* 
        <Button
          title="onboarding"
          onPress={() => {
            void AsyncStorage.removeItem('onboarding');
            void AsyncStorage.removeItem('cart');
            void AsyncStorage.removeItem('user');
            void AsyncStorage.removeItem('auth');
          }}
        />
        <Button
          title="open toast"
          onPress={() => {
            dispatch({
              type: 'ALERT',
              payload: {
                open: true,
                content: <Text>jklasdhajsd</Text>,
                config: { permanent: true }
              }
            });
          }}
        /> */}
      </ScrollView>
    </Layout>
  );
};

export default Home;
