import axiosFetch from 'utils/axiosConfig/axiosFetch';
import { IGetAddress } from 'utils/types/AddressTypes';

type IPutAddress = (body: IGetAddress) => Promise<any>;

const putAddress: IPutAddress = async (body) => {
  return await axiosFetch('/address', {
    method: 'PUT',
    data: body
  }).then((response) => {
    return response;
  });
};

export default putAddress;
