import { Card, Hoverable, Icon, Text } from 'atoms';
import { useTheme } from 'hooks';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import CardWithOptionStyle from './cardWithOption.styles';

export type OptionMenuCard = {
  label: string;
  onPress: () => void;
};

interface ICardWithOption {
  optionsMenu: OptionMenuCard[];
}

const CardWithOption: React.FC<ICardWithOption> = ({
  optionsMenu,
  children
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const styles = CardWithOptionStyle(showOptions);
  const theme = useTheme();
  return (
    <Card containerStyle={styles.containerCard}>
      {/* ---------MENU DE OPCIONES FLOTANTE--------- */}
      <Card containerStyle={styles.containerOptions}>
        {optionsMenu
          ? optionsMenu.map((e, i) => (
              <Hoverable key={i}>
                {(hover: boolean) => (
                  <Pressable
                    onPress={() => {
                      setShowOptions(false);
                      e.onPress();
                    }}
                    style={({ pressed }) => [
                      {
                        backgroundColor:
                          pressed || hover ? theme.colors.secondary : undefined,
                        opacity: pressed ? 0.5 : 1
                      }
                    ]}
                  >
                    <Text>{e.label}</Text>
                  </Pressable>
                )}
              </Hoverable>
            ))
          : null}
      </Card>

      {/* ---------ICONO DEL MENU DE OPCIONES--------- */}
      <Pressable
        style={({ pressed }) => [
          styles.containerIconMenu,
          {
            opacity: pressed ? 0.5 : 1
          }
        ]}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Icon name="ellipsis-v" size={24} />
      </Pressable>
      {/* ---------Contenido de la card--------- */}
      {children}
    </Card>
  );
};

export default CardWithOption;
