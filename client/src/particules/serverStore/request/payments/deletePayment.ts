import axiosFetch from 'utils/axiosConfig/axiosFetch';

type IDeletePayment = (body: { card_id: string }) => Promise<any>;

const deletePayment: IDeletePayment = async (body) => {
  return await axiosFetch('/payments', {
    method: 'DELETE',
    data: body
  }).then((response) => {
    return response;
  });
};

export default deletePayment;
