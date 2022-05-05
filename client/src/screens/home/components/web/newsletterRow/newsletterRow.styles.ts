import { StyleSheet } from 'react-native';

interface IStyleProps {
  containerSection: {};
  subscribeButton: {};
  imageStyles: {};
}

const NewsletterRowStyle = (): IStyleProps => {
  return StyleSheet.create({
    containerSection: { paddingTop: 80 },
    subscribeButton: { marginTop: 32 },
    imageStyles: { width: '100%', height: 477, resizeMode: 'contain' }
  });
};

export default NewsletterRowStyle;
