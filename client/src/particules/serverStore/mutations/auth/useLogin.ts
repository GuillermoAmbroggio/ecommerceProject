import { useClientStore } from 'hooks';
import { getUser, postLogin } from 'particules/serverStore/request';
import { postLoginWeb } from 'particules/serverStore/request/auth/postLogin';
import { useMutation, UseMutationResult } from 'react-query';
import { IAuth, IAuthWeb, ILogin } from 'utils/types/UserTypes';
import useLogout, { useLogoutWeb } from './useLogout';

const useLogin: () => UseMutationResult<IAuth, any, ILogin, unknown> = () => {
  const { dispatch } = useClientStore();
  const { mutate } = useLogout();

  return useMutation(postLogin, {
    onSuccess: async (data) => {
      dispatch({ type: 'AUTH', payload: data });
      getUser()
        .then((user) => {
          dispatch({ type: 'SET_USER', payload: user });
        })
        .catch(() => mutate(data.refreshToken));
    }
  });
};

export const useLoginWeb: () => UseMutationResult<
  IAuthWeb,
  any,
  ILogin,
  unknown
> = () => {
  const { dispatch } = useClientStore();
  const { mutate } = useLogoutWeb();

  return useMutation(postLoginWeb, {
    onSuccess: async (data) => {
      dispatch({ type: 'AUTH_WEB', payload: data });
      getUser()
        .then((user) => {
          dispatch({ type: 'SET_USER', payload: user });
        })
        .catch(() => mutate());
    }
  });
};

export default useLogin;
