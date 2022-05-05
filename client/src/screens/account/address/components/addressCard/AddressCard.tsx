import { Button, Text } from 'atoms';
import { useClientStore } from 'hooks';
import { CardWithOption } from 'molecules';
import { OptionMenuCard } from 'molecules/cardWithOption/CardWithOption';
import React from 'react';
import { View } from 'react-native';
import { Layout } from 'utils';
import { IGetAddress } from 'utils/types/AddressTypes';
import AddressCardStyle from './addressCard.styles';

interface IAddressCardProps {
  address: IGetAddress;
  pressConfirmDelete: (addressId: string) => void;
  setOpenEditAddress: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      address?: IGetAddress | undefined;
    }>
  >;
}

const AddressCard: React.FC<IAddressCardProps> = ({
  address,
  pressConfirmDelete,
  setOpenEditAddress
}) => {
  const { dispatch } = useClientStore();
  const { Row } = Layout;

  const styles = AddressCardStyle();

  const contentAlertDelete = () => (
    <View style={styles.alertContainer}>
      <Text variant="bodyTitle">Estás por eliminar una dirección</Text>
      <Text style={styles.textAlert}>{`${address.name ?? ''} Ubicada en ${
        address.street
      } ${address.street_number ?? ''}`}</Text>
      <Row style={styles.buttonsAlert}>
        <Button
          title="Cancelar"
          onPress={() => {
            dispatch({ type: 'ALERT', payload: { open: false } });
          }}
        />
        <Button
          type="tertiary"
          title="Eliminar"
          onPress={() => {
            pressConfirmDelete(address.id);
          }}
        />
      </Row>
    </View>
  );

  const menuOptions: OptionMenuCard[] = [
    {
      label: 'Modificar',
      onPress: () => {
        setOpenEditAddress({ status: true, address });
      }
    },
    {
      label: 'Eliminar',
      onPress: () => {
        dispatch({
          type: 'ALERT',
          payload: {
            config: { permanent: true, variant: undefined },
            open: true,
            content: contentAlertDelete()
          }
        });
      }
    }
  ];

  return (
    <CardWithOption optionsMenu={menuOptions}>
      {/* ---------ALIAS--------- */}
      {address.name ? <Text variant="bodyBold">{address.name}</Text> : null}

      {/* ---------CALLE Y NUMERO--------- */}
      <Text variant={address.name ? 'bodySmall' : 'bodyBold'}>{`${
        address.street
      } ${address.street_number ?? 'SN'}`}</Text>

      {/* ---------DEPARTAMENTO--------- */}
      {address.apartment ? (
        <Text variant="bodySmall">{`Piso ${address.apartment}`}</Text>
      ) : null}

      {/* ---------INFO ADICIONAL--------- */}
      {address.aditional_info ? (
        <Text variant="bodySmall">{address.aditional_info}</Text>
      ) : null}

      {/* ---------PROVINCIA, CIUDAD Y CODIGO POSTAL--------- */}
      <Text variant="bodySmall">{`${address.state} (${address.zip_code}), ${address.city}`}</Text>

      {/* ---------TELEFONO--------- */}
      {address.phone ? <Text variant="bodySmall">{address.phone}</Text> : null}
    </CardWithOption>
  );
};

export default AddressCard;
