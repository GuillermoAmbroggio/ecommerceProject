import { Modal } from 'molecules';
import { EmptyState } from 'organisms';
import React, { useState } from 'react';
import AddPayments from '../addPayment/AddPayment';

const EmptyPayments: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const textTitle = 'Sin tarjetas';
  const textBody =
    'Aún no cuentas con una tarjeta cargada, puedes agregar una ahora.';
  const image = { source: require('assets/emptyState/emptyPayment.png') };
  const buttonText = 'Agregar tarjeta';

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
        textHeader="Nueva tarjeta"
      >
        <AddPayments closeAddPayment={handleCloseModal} />
      </Modal>
    </>
  );
};

export default EmptyPayments;
