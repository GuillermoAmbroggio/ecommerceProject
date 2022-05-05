import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'atoms';
import { useClientStore } from 'hooks';
import { Modal } from 'molecules';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import { Footer } from 'organisms';
import AccountMenu from 'organisms/accountMenu/AccountMenu';
import {
  useAddAddress,
  useDeleteAddress,
  useEditAddress
} from 'particules/serverStore/mutations';
import { useGetAddress } from 'particules/serverStore/queries';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { LoadingScreen } from 'utils';
import { IGetAddress } from 'utils/types/AddressTypes';
import AddressStyle from './address.styles';
import AddAddress from './components/addAddress/AddAddress';
import AddressCard from './components/addressCard/AddressCard';
import EditAddress from './components/editAddress/EditAddress';
import EmptyAddress from './components/emptyAddress/EmptyAddress';

interface IAddressProps {
  navigation: StackNavigationProp<AccountParamList, 'Address'>;
}

const Address: React.FC<IAddressProps> = ({ navigation }) => {
  const { dispatch } = useClientStore();
  const [openEditAddress, setOpenEditAddress] = useState<{
    status: boolean;
    address?: IGetAddress;
  }>({ status: false, address: undefined });
  const [openAddAddress, setOpenAddAddress] = useState(false);

  /* Request al api */
  const getAddress = useGetAddress();
  const addAddresss = useAddAddress();
  const editAddress = useEditAddress();
  const deleteAddress = useDeleteAddress();

  const isEmptyAddress = !getAddress.data?.length;

  const styles = AddressStyle();

  const closeEditAddress: () => void = () => {
    setOpenEditAddress({ status: false });
  };
  const closeAddAddress: () => void = () => {
    setOpenAddAddress(false);
  };

  /**
   * Funcion que se ejecuta al confirmar eliminar una dirección.
   * @param addressId Id de la dirección a eliminar
   */
  const pressConfirmDelete = (addressId: string) => {
    deleteAddress.mutate(addressId);
    dispatch({ type: 'ALERT', payload: { open: false } });
  };

  /**
   * Maneja la devolucion de Agregar direccion de api
   */
  useEffect(() => {
    if (addAddresss.isSuccess) {
      closeAddAddress();
      dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            variant: 'success',
            textToast: 'Dirección agregada exitosamente'
          }
        }
      });
    }
    if (addAddresss.error) {
      closeAddAddress();
      dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            variant: 'error',
            textToast: 'No se pudo agregar la dirección'
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addAddresss.error, addAddresss.isSuccess]);

  /**
   * Maneja la devolucion de editar direccion de api
   */
  useEffect(() => {
    if (editAddress.isSuccess) {
      closeEditAddress();
      dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            variant: 'success',
            textToast: 'Dirección editada exitosamente'
          }
        }
      });
    }
    if (editAddress.error) {
      closeEditAddress();
      dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            variant: 'error',
            textToast: 'No se pudo editar la dirección'
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editAddress.error, editAddress.isSuccess]);

  if (
    getAddress.isLoading ||
    addAddresss.isLoading ||
    editAddress.isLoading ||
    deleteAddress.isLoading
  ) {
    return (
      <AccountMenu navigation={navigation}>
        <LoadingScreen />
      </AccountMenu>
    );
  }
  if (isEmptyAddress) {
    return (
      <AccountMenu navigation={navigation}>
        <EmptyAddress addAddresss={addAddresss} />
      </AccountMenu>
    );
  }
  return (
    <>
      <AccountMenu navigation={navigation}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.containerContent}>
            {getAddress?.data?.length
              ? getAddress.data.map((e, i) => (
                  <AddressCard
                    key={i}
                    address={e}
                    setOpenEditAddress={setOpenEditAddress}
                    pressConfirmDelete={pressConfirmDelete}
                  />
                ))
              : null}
          </View>
        </ScrollView>

        <Footer>
          <Button
            title="Agregar nuevo domicilio"
            onPress={() => setOpenAddAddress(true)}
            stretch
          />
        </Footer>
      </AccountMenu>

      {/* --------MODAL EDITAR DOMICILIO-------- */}
      <Modal
        open={openEditAddress.status}
        onClose={closeEditAddress}
        textHeader="Editar domicilio"
      >
        {openEditAddress.address ? (
          <EditAddress
            address={openEditAddress.address}
            editAddress={editAddress}
          />
        ) : null}
      </Modal>
      {/* --------MODAL AGREGAR DOMICILIO-------- */}
      <Modal
        open={openAddAddress}
        onClose={closeAddAddress}
        textHeader="Nuevo domicilio"
      >
        <AddAddress addAddresss={addAddresss} />
      </Modal>
    </>
  );
};

export default Address;
