import { Button, Text } from 'atoms';
import { TextVariants } from 'atoms/text/Text';
import React from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  TextProps,
  View,
  Image
} from 'react-native';
import { Layout } from 'utils';

interface IEmptyStateProps {
  image?: { source: ImageSourcePropType };
  iconName?: string;
  textTitle: string;
  textTitleVariant?: TextVariants;
  textTitleStyle?: StyleProp<TextProps>;
  textBody?: string;
  textBodyVariant?: TextVariants;
  textBodyStyle?: StyleProp<TextProps>;
  buttonText?: string;
  disabledButton?: boolean;
  onPress?: () => void;
}

const EmptyState: React.FC<IEmptyStateProps> = ({
  image,
  iconName,
  textTitle,
  textBody,
  buttonText,
  disabledButton,
  onPress
}) => {
  return (
    <Layout.Content
      ph={16}
      style={{
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 36
      }}
    >
      {image ? (
        <View style={{ height: '50%', width: '100%' }}>
          <Image
            source={image.source}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
      ) : null}
      <View style={{ flex: 1, marginTop: 16 }}>
        <Text
          variant="bodyTitle"
          style={{ textAlign: 'center', marginBottom: 8 }}
        >
          {textTitle}
        </Text>
        {textBody ? (
          <Text style={{ textAlign: 'justify' }}>{textBody}</Text>
        ) : null}
      </View>
      {buttonText ? (
        <Button
          title={buttonText}
          disabled={disabledButton}
          containerStyle={{
            alignSelf: 'stretch',
            alignItems: 'center'
          }}
          type="secondary"
          onPress={onPress}
        />
      ) : null}
    </Layout.Content>
  );
};

export default EmptyState;
