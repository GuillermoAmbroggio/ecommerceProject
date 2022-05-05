import { postPayment } from 'particules/serverStore/request';
import { useMutation, useQueryClient } from 'react-query';
import { ICreditCard } from 'utils/types/PaymentTypes';

const useAddPayment = () => {
  const serverStore = useQueryClient();

  return useMutation(postPayment, {
    onSuccess: async (data: ICreditCard) => {
      serverStore.setQueryData<ICreditCard[]>('payments', (oldData) => {
        if (oldData?.filter((e) => e.id === data.id).length) {
          return oldData;
        } else {
          return oldData?.length ? [data, ...oldData] : [data];
        }
      });
    }
  });
};

export default useAddPayment;
