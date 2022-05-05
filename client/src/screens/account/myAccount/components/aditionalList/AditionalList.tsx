import { Card } from 'atoms';
import { AccountItem } from 'molecules';
import SectionCard from 'organisms/sectionCard/SectionCard';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import AditionalListStyle from './aditionalList.styles';

interface IAditionalListProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const AditionalList: React.FC<IAditionalListProps> = ({ containerStyle }) => {
  const styles = AditionalListStyle();
  const DataList = [
    { name: 'Aviso de privacidad', iconName: 'file-invoice' },
    { name: 'Términos y condiciones', iconName: 'bars' }
  ];
  return (
    <SectionCard
      title="Información adicional"
      borderRadius={10}
      containerStyle={containerStyle}
    >
      {DataList.map((e, i) => {
        return (
          <View key={i}>
            <AccountItem text={e.name} nameIcon={e.iconName} />
            {i !== DataList.length - 1 ? (
              <Card.Divider style={styles.dividerStyle} />
            ) : null}
          </View>
        );
      })}
    </SectionCard>
  );
};

export default AditionalList;
