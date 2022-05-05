import axiosFetch from 'utils/axiosConfig/axiosFetch';
import { IAddress } from 'utils/types/AddressTypes';

type IPostAddress = (body: IAddress) => Promise<any>;

const postAddress: IPostAddress = async (body) => {
  return await axiosFetch('/address', {
    method: 'POST',
    data: body
  }).then((response) => {
    return response;
  });
};

export default postAddress;
