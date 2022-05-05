import { Icon, Text } from 'atoms';
import React from 'react';
import { Pressable, View } from 'react-native';
import AccountItemStyle from './accountItem.styles';

interface IAccountItemProps {
  nameIcon?: string;
  text: string;
  onPress?: () => void;
}

const AccountItem: React.FC<IAccountItemProps> = ({
  nameIcon,
  text,
  onPress
}) => {
  const styles = AccountItemStyle();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1
        },
        styles.container
      ]}
    >
      <View style={styles.containerFirst}>
        {nameIcon ? (
          <View style={styles.containerIcon}>
            <Icon name={nameIcon} />
          </View>
        ) : null}
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <Icon name="chevron-right" size={16} />
    </Pressable>
  );
};

export default AccountItem;
