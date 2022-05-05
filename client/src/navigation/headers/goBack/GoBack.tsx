import { StackNavigationProp } from '@react-navigation/stack';
import { Icon, Text } from 'atoms';
import React from 'react';
import { Pressable } from 'react-native';
import GoBackStyle from './goBack.styles';

interface IGoBackProps {
  navigation?: StackNavigationProp<any>;
  onPress?: () => void;
}

const GoBack: React.FC<IGoBackProps> = ({ navigation, onPress }) => {
  const styles = GoBackStyle();

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1
        },
        styles.containerPressed
      ]}
      onPress={() => {
        onPress ? onPress() : navigation?.goBack();
      }}
    >
      <Icon name="arrow-left" />
      <Text style={styles.text} variant="bodyBold">
        Vovler
      </Text>
    </Pressable>
  );
};

export default GoBack;
