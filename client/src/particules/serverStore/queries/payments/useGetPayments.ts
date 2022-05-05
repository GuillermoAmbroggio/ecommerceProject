import { useQuery } from 'react-query';
import { getPayments } from 'particules/serverStore/request';
import { ICreditCard } from 'utils/types/PaymentTypes';

export default function useGetPayments() {
  return useQuery<ICreditCard[]>('payments', getPayments);
}
