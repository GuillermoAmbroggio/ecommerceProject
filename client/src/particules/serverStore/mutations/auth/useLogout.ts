import { useClientStore } from 'hooks';
import { postLogout } from 'particules/serverStore/request';
import { postLogoutWeb } from 'particules/serverStore/request/auth/postLogout';
import { useMutation } from 'react-query';

const useLogout = () => {
  const { dispatch } = useClientStore();

  return useMutation(postLogout, {
    onSuccess: async (data) => {
      dispatch({ type: 'LOGOUT' });
    }
  });
};

export const useLogoutWeb = () => {
  const { dispatch } = useClientStore();

  return useMutation(postLogoutWeb, {
    onSuccess: async (data) => {
      dispatch({ type: 'LOGOUT' });
      dispatch({ type: 'LOADING', payload: false });
    }
  });
};

export default useLogout;
