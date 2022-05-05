import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from 'atoms';
import { AccountItem } from 'molecules';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import SectionCard from 'organisms/sectionCard/SectionCard';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import ConfigListStyle from './configList.styles';

interface IConfigList {
  containerStyle?: StyleProp<ViewStyle>;
  navigation: StackNavigationProp<AccountParamList, 'Account'>;
  profile?: boolean;
}

const ConfigList: React.FC<IConfigList> = ({
  containerStyle,
  navigation,
  profile
}) => {
  const styles = ConfigListStyle();
  const DataList: Array<{
    name: string;
    iconName: string;
    navigation: 'Address' | 'Payments' | 'Invoicing' | 'Account';
  }> = [
    { name: 'Domicilios', iconName: 'map-marked', navigation: 'Address' },
    { name: 'Tarjetas', iconName: 'cc-amazon-pay', navigation: 'Payments' },
    { name: 'Facturación', iconName: 'file-invoice', navigation: 'Invoicing' }
  ];

  if (profile) {
    DataList.unshift({
      name: 'Mis datos personales',
      iconName: 'user',
      navigation: 'Account'
    });
  }
  return (
    <SectionCard
      title="Mis configuraciones"
      borderRadius={10}
      containerStyle={containerStyle}
    >
      {DataList.map((e, i) => {
        return (
          <View key={i}>
            <AccountItem
              text={e.name}
              nameIcon={e.iconName}
              onPress={() => navigation.navigate(e.navigation)}
            />
            {i !== DataList.length - 1 ? (
              <Card.Divider style={styles.dividerStyle} />
            ) : null}
          </View>
        );
      })}
    </SectionCard>
  );
};

export default ConfigList;
