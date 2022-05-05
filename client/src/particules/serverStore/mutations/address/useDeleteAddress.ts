import { deleteAddress } from 'particules/serverStore/request';
import { useMutation, useQueryClient } from 'react-query';
import { IGetAddress } from 'utils/types/AddressTypes';

const useDeleteAddress = () => {
  const serverStore = useQueryClient();

  return useMutation(deleteAddress, {
    onSuccess: async (data: IGetAddress) => {
      serverStore.setQueryData<IGetAddress[]>('address', (oldData) => {
        return oldData?.length ? oldData?.filter((e) => e.id !== data.id) : [];
      });
    }
  });
};

export default useDeleteAddress;
