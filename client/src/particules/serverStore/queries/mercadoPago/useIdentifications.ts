import { useQuery } from 'react-query';
import { getIdentifications } from 'particules/serverStore/request';

export default function useIdentifications() {
  return useQuery('mp_identifications', getIdentifications);
}
