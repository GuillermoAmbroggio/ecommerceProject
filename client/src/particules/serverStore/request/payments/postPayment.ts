import axiosFetch from 'utils/axiosConfig/axiosFetch';
import { IAddPayment } from 'utils/types/PaymentTypes';

type IPostPayment = (body: IAddPayment) => Promise<any>;

const postPayment: IPostPayment = async (body) => {
  return await axiosFetch('/payments', {
    method: 'POST',
    data: body
  }).then((response) => {
    return response;
  });
};

export default postPayment;
