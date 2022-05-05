import { Modal } from 'molecules';
import { EmptyState } from 'organisms';
import React, { useState } from 'react';
import { UseMutationResult } from 'react-query';
import { IAddress, IGetAddress } from 'utils/types/AddressTypes';
import AddAddress from '../addAddress/AddAddress';

interface IEmptyAddress {
  addAddresss: UseMutationResult<IGetAddress, unknown, IAddress, unknown>;
}
const EmptyAddress: React.FC<IEmptyAddress> = ({ addAddresss }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const textTitle = 'Sin domicilios de entrega';
  const textBody =
    'Aún no cuentas con un domicilio de entrega, indícanos donde te gustaría recibir tu pedido.';
  const image = { source: require('assets/emptyState/emptyAddress.png') };
  const buttonText = 'Agregar domicilio';

  const handleCloseModal: () => void = () => {
    setModalVisible(false);
  };
  return (
    <>
      <EmptyState
        textTitle={textTitle}
        textBody={textBody}
        image={image}
        buttonText={buttonText}
        onPress={() => setModalVisible(true)}
      />
      <Modal
        open={modalVisible}
        onClose={handleCloseModal}
        textHeader="Nuevo domicilio"
      >
        <AddAddress addAddresss={addAddresss} />
      </Modal>
    </>
  );
};

export default EmptyAddress;
