import axios from 'axios';
import { IAuth, IAuthWeb, IUser } from 'utils/types/UserTypes';

type IPostLogin = (body: IUser) => Promise<IAuth>;
type IPostLoginWeb = (body: IUser) => Promise<IAuthWeb>;

const postRegister: IPostLogin = async (body) => {
  const { data }: { data: IAuth } = await axios.post(
    '/users/create-user',
    body
  );
  return data;
};

export const postRegisterWeb: IPostLoginWeb = async (body) => {
  const { data }: { data: IAuthWeb } = await axios.post(
    '/users/create-user',
    body,
    { withCredentials: true }
  );
  return data;
};

export default postRegister;
