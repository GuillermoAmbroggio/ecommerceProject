import axiosFetch from 'utils/axiosConfig/axiosFetch';

type IGetPayments = () => Promise<any>;

const getPayments: IGetPayments = async () => {
  return await axiosFetch('/payments').then((response) => {
    return response;
  });
};

export default getPayments;
