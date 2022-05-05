import { Text } from 'atoms';
import { Modal } from 'molecules';
import { EmptyState } from 'organisms';
import React, { useState } from 'react';
import { View } from 'react-native';

const EmptyInvoicing: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const textTitle = 'Sin datos de facturación';
  const textBody =
    'Aún no cuentas con un datos de facturación, pronto podras agregar/editar tus datos.';
  const image = { source: require('assets/emptyState/emptyInvoicing.png') };
  const buttonText = 'Agregar datos de facturación';

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
        disabledButton={true}
      />
      <Modal
        open={modalVisible}
        onClose={handleCloseModal}
        textHeader="Nuevo domicilio"
      >
        <View>
          <Text>Aca solicitar datos</Text>
        </View>
      </Modal>
    </>
  );
};

export default EmptyInvoicing;
