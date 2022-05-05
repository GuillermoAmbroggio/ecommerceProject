import axios from 'axios';
import { IAuth, IAuthWeb, ILogin } from 'utils/types/UserTypes';

type IPostLogin = ({ email, password }: ILogin) => Promise<IAuth>;
type IPostLoginWeb = ({ email, password }: ILogin) => Promise<IAuthWeb>;

const postLogin: IPostLogin = async ({ email, password }) => {
  const { data }: { data: IAuth } = await axios.post('/login-token', {
    email,
    password
  });
  return data;
};

export const postLoginWeb: IPostLoginWeb = async ({ email, password }) => {
  const { data }: { data: IAuthWeb } = await axios.post(
    '/login',
    {
      email,
      password
    },
    { withCredentials: true }
  );
  return data;
};
export default postLogin;
