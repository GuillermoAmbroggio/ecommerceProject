import axiosFetch from 'utils/axiosConfig/axiosFetch';

type IDeleteAddress = (id: string) => Promise<any>;

const deleteAddress: IDeleteAddress = async (id) => {
  return await axiosFetch('/address', {
    method: 'DELETE',
    data: { id }
  }).then((response) => {
    return response;
  });
};

export default deleteAddress;
