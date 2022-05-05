import axiosFetch from 'utils/axiosConfig/axiosFetch';

type IGetAddress = () => Promise<any>;
type IGetOneAddress = (addressId: string) => Promise<any>;

const getAddress: IGetAddress = async () => {
  return await axiosFetch('/address').then((response) => {
    return response;
  });
};

export const getOneAddress: IGetOneAddress = async (addressId) => {
  return await axiosFetch(`/address/${addressId}`).then((response) => {
    return response;
  });
};

export default getAddress;
