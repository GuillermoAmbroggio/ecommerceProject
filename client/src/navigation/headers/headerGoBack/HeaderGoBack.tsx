import { StackNavigationProp } from '@react-navigation/stack';
import { Card, Icon, Text } from 'atoms';
import { useTheme } from 'hooks';
import React from 'react';
import { Pressable, View } from 'react-native';
import HeaderGoBackStyle from './headerGoBack.styles';

interface IHeaderGoBackProps {
  navigation: StackNavigationProp<any>;
  title?: string;
}

const HeaderGoBack: React.FC<IHeaderGoBackProps> = ({ navigation, title }) => {
  const styles = HeaderGoBackStyle();
  const theme = useTheme();

  return (
    <Card containerStyle={[styles.containerCard]}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? theme.colors.secondary : undefined,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            opacity: pressed ? 0.5 : 1
          }
        ]}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" />
      </Pressable>
      {title ? (
        <View style={styles.containerText}>
          <Text variant="bodyBold">{title}</Text>
        </View>
      ) : null}
    </Card>
  );
};

export default HeaderGoBack;
