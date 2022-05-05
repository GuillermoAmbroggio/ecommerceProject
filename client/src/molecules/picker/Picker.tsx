import { Hoverable, Icon, Text } from 'atoms';
import { useTheme } from 'hooks';
import Input from 'molecules/input/Input';
import React, { useEffect, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleProp,
  View,
  ViewStyle
} from 'react-native';
import PickerStyle from './picker.styles';

type OptionPicker = { label: string; key?: string | number };

interface IPickerProps {
  containerStyle?: StyleProp<ViewStyle>;
  placeHolder?: string;
  options?: OptionPicker[];
  onChangeValue?: (value: OptionPicker) => void;
  cancelOption?: string;
  onPressCancel?: () => void;
  label?: string;
  message?: string;
  messageType?: 'error' | 'succes';
}

const Picker: React.FC<IPickerProps> = ({
  containerStyle,

  placeHolder,
  options,
  onChangeValue,
  cancelOption,
  onPressCancel,
  label,
  message,
  messageType = 'error'
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState<OptionPicker | null>(null);
  const styles = PickerStyle(showOptions, label);
  const theme = useTheme();

  useEffect(() => {
    if (!placeHolder && options && options.length) {
      setValue(options[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text variant="bodySmallBold" style={styles.textLabel}>
          {label}
        </Text>
      ) : null}
      <Pressable
        style={styles.containerPress}
        onPress={() => {
          setShowOptions(!showOptions);
        }}
      />
      <Input
        value={value?.label ?? placeHolder ?? ''}
        rightIcon={<Icon name={showOptions ? 'chevron-up' : 'chevron-down'} />}
      />

      <View style={styles.containerOptions}>
        <ScrollView>
          {options && cancelOption ? (
            <Hoverable>
              {(hover: boolean) => (
                <Pressable
                  style={[
                    styles.styleOptions,
                    {
                      backgroundColor: hover
                        ? theme.colors.secondary
                        : theme.colors.common.white
                    }
                  ]}
                  onPress={() => {
                    setShowOptions(false);
                    if (onPressCancel) {
                      onPressCancel();
                    }
                  }}
                >
                  <Text variant="bodyText">{cancelOption}</Text>
                </Pressable>
              )}
            </Hoverable>
          ) : null}
          {options ? (
            options.map((e, i) => (
              <Hoverable key={i}>
                {(hover: boolean) => (
                  <Pressable
                    style={({ pressed }) => [
                      {
                        marginVertical: 8,
                        opacity: pressed ? 0.5 : 1
                      },
                      {
                        backgroundColor: hover
                          ? theme.colors.secondary
                          : theme.colors.common.white
                      }
                    ]}
                    onPress={() => {
                      if (onChangeValue) {
                        onChangeValue(e);
                      }
                      setValue(e);
                      setShowOptions(false);
                    }}
                  >
                    <Text variant="bodyText">{e.label}</Text>
                  </Pressable>
                )}
              </Hoverable>
            ))
          ) : (
            <Text variant="bodyText">Sin opciones</Text>
          )}
        </ScrollView>
      </View>
      {message ? (
        <Text
          variant="bodySmall"
          color={messageType === 'error' ? 'danger' : 'succes'}
        >
          {message}
        </Text>
      ) : null}
    </View>
  );
};

export default Picker;
