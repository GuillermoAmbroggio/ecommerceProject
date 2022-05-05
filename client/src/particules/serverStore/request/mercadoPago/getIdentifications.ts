import { MP_API_KEY } from '@env';
import { IMPIdentifications } from 'utils/types/MercadoPagoTypes';
import { axiosUnintercepted } from 'utils';

type IGetIdentifications = () => Promise<IMPIdentifications>;

const getIdentifications: IGetIdentifications = async () => {
  const { data }: { data: IMPIdentifications } = await axiosUnintercepted.get(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `https://api.mercadopago.com/v1/identification_types?public_key=${MP_API_KEY}&locale=en&js_version=2.0.0`
  );
  return data;
};

export default getIdentifications;
