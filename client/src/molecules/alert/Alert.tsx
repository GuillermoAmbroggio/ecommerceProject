import { Icon, Text } from 'atoms';
import { useTheme } from 'hooks';
import Toast from '../toast/Toast';
import { IToastProps } from 'molecules/toast/toast.types';
import React from 'react';
import { View } from 'react-native';
import AlertStyle from './alert.styles';

export interface IAlertProps extends IToastProps {
  type?: 'success' | 'error';
  textMesagge?: string;
}

const Alert: React.FC<IAlertProps> = ({
  type,
  textMesagge,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const styles = AlertStyle();
  return (
    <Toast
      containerToastStyle={styles.containerToast}
      containerGlobalStyle={styles.containerGlobalToast}
      {...rest}
    >
      {type ? (
        <View style={[styles.contentToast]}>
          <Icon
            name={type === 'success' ? 'check-circle' : 'times'}
            size={80}
            color={
              type === 'success' ? theme.colors.success : theme.colors.danger
            }
          />
          <Text variant="bodyTitle" style={styles.textToast}>
            {textMesagge}
          </Text>
        </View>
      ) : (
        <View style={[styles.contentToast]}>{children}</View>
      )}
    </Toast>
  );
};

export default Alert;
