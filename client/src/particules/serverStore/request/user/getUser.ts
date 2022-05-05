import axiosFetch from 'utils/axiosConfig/axiosFetch';

type IGetUser = () => Promise<any>;

const getUser: IGetUser = async () => {
  return await axiosFetch('/users').then((response) => {
    return response;
  });
};

export default getUser;
