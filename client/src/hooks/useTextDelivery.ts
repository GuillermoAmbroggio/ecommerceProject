import { IStatusOrders } from 'utils/types/OrderTypes';

type IuseTextDelivery = (status: IStatusOrders) => string;

const useTextDelivery: IuseTextDelivery = (status) => {
  let text = '';
  switch (status) {
    case 'completed':
      text = 'Llegó el';
      break;
    case 'incoming':
      text = 'Llegará el';
      break;
    default:
      text = '';
      break;
  }
  return text;
};

export default useTextDelivery;
