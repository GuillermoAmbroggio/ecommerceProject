import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'atoms';
import { useClientStore } from 'hooks';
import { Modal } from 'molecules';
import { AccountParamList } from 'navigation/stacks/root/account/accountParamList';
import { Footer } from 'organisms';
import AccountMenu from 'organisms/accountMenu/AccountMenu';
import { useDeletePayment } from 'particules/serverStore/mutations';
import { useGetPayments } from 'particules/serverStore/queries';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { LoadingScreen } from 'utils';
import { ICreditCard } from 'utils/types/PaymentTypes';
import AddPayment from './components/addPayment/AddPayment';
import EmptyPayment from './components/emptyPayment/EmptyPayment';
import PaymentCard from './components/paymentCard/PaymentCard';
import PaymentStyle from './payment.styles';

interface IPaymentsProps {
  navigation: StackNavigationProp<AccountParamList, 'Address'>;
}

const Payments: React.FC<IPaymentsProps> = ({ navigation }) => {
  const [openAddPayment, setOpenAddPayment] = useState(false);
  const { dispatch } = useClientStore();

  const payments = useGetPayments();
  const deletePayment = useDeletePayment();

  const isEmptyPayment = !payments?.data?.length;
  const styles = PaymentStyle();

  const pressConfirmDelete = (cardId: string) => {
    deletePayment.mutate({ card_id: cardId });
    dispatch({ type: 'ALERT', payload: { open: false } });
  };

  const closeAddPayment: () => void = () => {
    setOpenAddPayment(false);
  };

  /**
   * Maneja alertas cuando se borra una tarjeta:
   */
  useEffect(() => {
    if (deletePayment.isSuccess || deletePayment.isError) {
      dispatch({
        type: 'TOAST',
        payload: {
          open: true,
          config: {
            textToast: deletePayment.isSuccess
              ? 'Tarjeta eliminada'
              : 'No se pudo eliminar la tarjeta',
            variant: deletePayment.isSuccess ? 'success' : 'error'
          }
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletePayment.error, deletePayment.isSuccess]);

  if (payments.isLoading || deletePayment.isLoading) {
    return (
      <AccountMenu navigation={navigation}>
        <LoadingScreen />
      </AccountMenu>
    );
  }
  if (isEmptyPayment) {
    return (
      <AccountMenu navigation={navigation}>
        <EmptyPayment />
      </AccountMenu>
    );
  }
  return (
    <>
      <AccountMenu navigation={navigation}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.containerContent}>
            {payments?.data?.length
              ? payments.data.map((e: ICreditCard, i: number) => (
                  <PaymentCard
                    key={i}
                    payment={e}
                    onPressConfirmDelete={pressConfirmDelete}
                  />
                ))
              : null}
          </View>
        </ScrollView>
        <Footer>
          <Button
            title="Agregar neuva tarjeta"
            onPress={() => setOpenAddPayment(true)}
            stretch
          />
        </Footer>
      </AccountMenu>

      {/* --------MODAL AGREGAR TARJETA-------- */}
      <Modal
        open={openAddPayment}
        onClose={closeAddPayment}
        textHeader="Nuevo tarjeta"
      >
        <AddPayment closeAddPayment={closeAddPayment} />
      </Modal>
    </>
  );
};

export default Payments;
