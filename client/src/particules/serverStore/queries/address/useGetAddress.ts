import { useQuery } from 'react-query';
import { getAddress } from 'particules/serverStore/request';
import { IGetAddress } from 'utils/types/AddressTypes';

export default function useGetAddress() {
  return useQuery<IGetAddress[]>('address', getAddress);
}
