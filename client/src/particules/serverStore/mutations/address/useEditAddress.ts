import { putAddress } from 'particules/serverStore/request';
import { useMutation, useQueryClient } from 'react-query';
import { IGetAddress } from 'utils/types/AddressTypes';

const useEditAddress = () => {
  const serverStore = useQueryClient();

  return useMutation(putAddress, {
    onSuccess: async (data: IGetAddress) => {
      serverStore.setQueryData<IGetAddress[] | undefined>(
        'address',
        (oldData) => {
          return oldData?.map((e) => {
            return e.id === data.id ? data : e;
          });
        }
      );
    }
  });
};

export default useEditAddress;
