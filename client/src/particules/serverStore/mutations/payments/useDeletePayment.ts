import { deletePayment } from 'particules/serverStore/request';
import { useMutation, useQueryClient } from 'react-query';
import { ICreditCard } from 'utils/types/PaymentTypes';

const useDeletePayment = () => {
  const serverStore = useQueryClient();

  return useMutation(deletePayment, {
    onSuccess: async (data: ICreditCard) => {
      serverStore.setQueryData<ICreditCard[]>('payments', (oldData) => {
        return oldData?.length ? oldData?.filter((e) => e.id !== data.id) : [];
      });
    }
  });
};

export default useDeletePayment;
