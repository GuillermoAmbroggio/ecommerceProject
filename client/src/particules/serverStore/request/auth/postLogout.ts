import axios from 'axios';

type IPostLogout = (refreshToken?: string) => Promise<string>;
type IPostLogoutWeb = () => Promise<string>;

const postLogout: IPostLogout = async (refreshToken) => {
  const { data }: { data: string } = await axios.post('/logout-token', {
    refreshToken
  });
  return data;
};

export const postLogoutWeb: IPostLogoutWeb = async () => {
  const { data }: { data: string } = await axios.get('/logout', {
    withCredentials: true
  });
  return data;
};

export default postLogout;
