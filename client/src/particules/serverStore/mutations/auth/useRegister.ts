import { useClientStore } from 'hooks';
import { getUser, postRegister } from 'particules/serverStore/request';
import { postRegisterWeb } from 'particules/serverStore/request/auth/postRegister';
import { useMutation, UseMutationResult } from 'react-query';
import { IAuth, IAuthWeb, IUser } from 'utils/types/UserTypes';
import useLogout, { useLogoutWeb } from './useLogout';

const useRegister: () => UseMutationResult<IAuth, any, IUser, unknown> = () => {
  const { dispatch } = useClientStore();
  const { mutate } = useLogout();
  return useMutation(postRegister, {
    onSuccess: async (data) => {
      dispatch({ type: 'AUTH', payload: data });
      getUser()
        .then((user) => {
          dispatch({ type: 'SET_USER', payload: user });
        })
        .catch(() => {
          mutate(data.refreshToken);
        });
    }
  });
};

export const useRegisterWeb: () => UseMutationResult<
  IAuthWeb,
  any,
  IUser,
  unknown
> = () => {
  const { dispatch } = useClientStore();
  const { mutate } = useLogoutWeb();
  return useMutation(postRegisterWeb, {
    onSuccess: async (data) => {
      dispatch({ type: 'AUTH_WEB', payload: data });
      getUser()
        .then((user) => {
          dispatch({ type: 'SET_USER', payload: user });
        })
        .catch(() => {
          mutate();
        });
    }
  });
};

export default useRegister;
