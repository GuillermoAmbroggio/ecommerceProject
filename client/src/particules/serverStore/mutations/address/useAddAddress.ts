import { postAddress } from 'particules/serverStore/request';
import { useMutation, useQueryClient } from 'react-query';
import { IGetAddress } from 'utils/types/AddressTypes';

const useAddAddress = () => {
  const serverStore = useQueryClient();

  return useMutation(postAddress, {
    onSuccess: async (data: IGetAddress) => {
      serverStore.setQueryData<IGetAddress[]>('address', (oldData) => {
        if (oldData?.filter((e) => e.id === data.id).length) {
          return oldData;
        } else {
          return oldData?.length ? [data, ...oldData] : [data];
        }
      });
    }
  });
};

export default useAddAddress;
