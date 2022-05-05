import { Icon, Text } from 'atoms';
import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import ToastStyle from './toast.styles';
import { IToastProps } from './toast.types';
import useToastStyles from './useToastStyles';

const Toast: React.FC<IToastProps> = ({
  variant,
  onClose,
  open,
  autoHideDuration = 2000,
  children,
  containerGlobalStyle,
  containerToastStyle,
  permanent,
  positionBottom = 32,
  positionLeft = 16,
  positionRight = 16,
  positionTop,
  textToast,
  textStyle
}) => {
  const styles = ToastStyle();
  const [visibly, setVisibly] = useState(false);
  const toastStyles = useToastStyles(variant);
  useEffect(() => {
    if (open) {
      setVisibly(true);
      if (!permanent) {
        (function () {
          setTimeout(function () {
            setVisibly(false);
            onClose();
          }, autoHideDuration);
        })();
      }
    } else {
      setVisibly(false);
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, autoHideDuration, permanent]);

  return (
    <>
      {visibly ? (
        <View
          style={[
            {
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: 'center'
            },
            containerGlobalStyle
          ]}
        >
          <Pressable
            style={[styles.containerGlobal]}
            onPress={() => {
              setVisibly(false);
              onClose();
            }}
          />
          <View
            style={[
              {
                bottom: positionBottom,
                left: positionLeft,
                right: positionRight,
                top: positionTop
              },
              // eslint-disable-next-line react-native/no-inline-styles
              {
                backgroundColor: toastStyles
                  ? toastStyles.backgroundColor
                  : 'white',
                borderColor: toastStyles ? toastStyles.color : undefined,
                borderWidth: toastStyles ? 2 : undefined
              },
              styles.containerToast,
              containerToastStyle
            ]}
          >
            {toastStyles ? (
              <View style={styles.contentToast}>
                <Icon
                  name={toastStyles.icon}
                  color={toastStyles.color}
                  size={30}
                />
                <Text
                  variant="bodyBold"
                  style={[
                    styles.containerTexts,
                    textStyle,
                    { color: toastStyles ? toastStyles.color : undefined }
                  ]}
                >
                  {textToast}
                </Text>
              </View>
            ) : (
              children
            )}
          </View>
        </View>
      ) : null}
    </>
  );
};

export default Toast;
