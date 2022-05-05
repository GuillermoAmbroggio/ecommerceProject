import { postEditPassword } from 'particules/serverStore/request';
import { useMutation, UseMutationResult } from 'react-query';
import { IEditPassword } from 'utils/types/UserTypes';

const useEditPassword: () => UseMutationResult<
  string,
  any,
  IEditPassword,
  unknown
> = () => {
  return useMutation(postEditPassword, {
    onSuccess: async (data) => {}
  });
};

export default useEditPassword;
