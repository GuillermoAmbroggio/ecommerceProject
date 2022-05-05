import axios from 'axios';
import { configMpHeader } from './addPayment';

export const getCard = ({
  cardId,
  customer_id,
}: {
  cardId: string;
  customer_id: string;
}) => {
  const { MP_URL } = process.env;

  return axios.get(
    `${MP_URL}/customers/${customer_id}/cards/${cardId}`,
    configMpHeader
  );
};
