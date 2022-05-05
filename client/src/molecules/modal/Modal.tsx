import React from 'react';
import {
  Modal as RNModal,
  ModalProps,
  Pressable,
  StyleProp,
  View,
  ViewStyle
} from 'react-native';
import { Icon, Text } from 'atoms';
import ModalStyle from './modal.styles';

interface IModalProps extends ModalProps {
  open: boolean;
  onClose: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  containerGlobalStyle?: StyleProp<ViewStyle>;

  textHeader?: string;
  header?: JSX.Element;
  footer?: JSX.Element;
  heightAutoContent?: boolean;
}

const Modal: React.FC<IModalProps> = ({
  open,
  onClose,
  children,
  containerStyle,
  containerGlobalStyle,
  header,
  textHeader,
  footer,
  heightAutoContent = false,
  ...rest
}) => {
  const styles = ModalStyle(heightAutoContent);
  return (
    <RNModal
      animationType="slide"
      visible={open}
      transparent={true}
      onRequestClose={() => {
        onClose();
      }}
      {...rest}
    >
      <View style={[styles.containerGlobal, containerGlobalStyle]}>
        {/* Permite que si presionas fuera del contenido se cierre el modal */}
        <Pressable style={[styles.containerClose]} onPress={() => onClose()} />
        <View style={[styles.containerModal, containerStyle]}>
          {header ?? (
            <View style={styles.containerHeader}>
              <Text variant="bodyTitle" style={{ flex: 1 }}>
                {textHeader}
              </Text>
              <Icon name="times" size={26} onPress={() => onClose()} />
            </View>
          )}
          <View style={{ flex: 1 }}>{children}</View>
          {footer ? <View>{footer}</View> : null}
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
