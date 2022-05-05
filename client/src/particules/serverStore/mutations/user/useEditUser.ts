import { useClientStore } from 'hooks';
import { postEditUser } from 'particules/serverStore/request';
import { useMutation } from 'react-query';

const useEditUser = () => {
  const { dispatch } = useClientStore();
  return useMutation(postEditUser, {
    onSuccess: async (data) => {
      dispatch({ type: 'SET_USER', payload: data });
    }
  });
};

export default useEditUser;
