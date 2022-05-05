import { Card, Icon, Text } from 'atoms';
import { TextVariants } from 'atoms/text/Text';
import React from 'react';
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import SectionCardStyle from './sectionCard.styles';

interface ISectionCardProps {
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleVariants?: TextVariants;
  titleStyle?: StyleProp<TextStyle>;
  footer?: string;
  footerOnPress?: () => void;
  borderRadius?: number;
}

const SectionCard: React.FC<ISectionCardProps> = ({
  containerStyle,
  contentContainerStyle,
  title,
  titleVariants = 'bodyTitle',
  titleStyle,
  footer,
  footerOnPress,
  borderRadius,
  children
}) => {
  const { Divider } = Card;
  const styles = SectionCardStyle();
  return (
    <Card
      containerStyle={[
        containerStyle,
        { borderRadius: borderRadius ?? borderRadius }
      ]}
    >
      {title ? (
        <View>
          <Text
            style={[styles.containerTitle, titleStyle]}
            variant={titleVariants}
          >
            {title}
          </Text>
          <Divider />
        </View>
      ) : null}
      <View style={[styles.containerBody, contentContainerStyle]}>
        {children}
      </View>
      {footer ? (
        <>
          <Divider />

          <Pressable
            style={({ pressed }) => [
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 8
              },
              { opacity: pressed ? 0.5 : 1 }
            ]}
            onPress={footerOnPress}
          >
            <Text variant="bodySmallBold">{footer}</Text>
            <Icon name="chevron-right" size={14} />
          </Pressable>
        </>
      ) : null}
    </Card>
  );
};

export default SectionCard;
