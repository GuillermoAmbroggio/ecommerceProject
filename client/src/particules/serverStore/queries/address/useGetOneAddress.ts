import { getOneAddress } from 'particules/serverStore/request/address/getAddress';
import { useQuery } from 'react-query';
import { IAddress } from 'utils/types/AddressTypes';

export default function useGetOneAddress(addressId: string) {
  return useQuery<IAddress>(
    `address_${addressId}`,
    async () => await getOneAddress(addressId)
  );
}
