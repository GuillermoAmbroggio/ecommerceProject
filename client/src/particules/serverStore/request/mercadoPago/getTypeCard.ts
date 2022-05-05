import { MP_API_KEY } from '@env';
import { IMPTypeCard } from 'utils/types/MercadoPagoTypes';
import { axiosUnintercepted } from 'utils';
import { useEffect, useState } from 'react';

type IGetTypeCard = (sixNumber: string) => {
  data?: IMPTypeCard | undefined;
  error?: string | undefined;
  isLoading: boolean;
};

const GetTypeCard: IGetTypeCard = (sixNumber) => {
  const [response, setResponse] = useState<{
    data?: IMPTypeCard;
    error?: string;
    isLoading: boolean;
  }>({ isLoading: false });

  useEffect(() => {
    if (sixNumber.length === 6 || sixNumber.length === 15) {
      setResponse({ isLoading: true });
      void axiosUnintercepted
        .get(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `https://api.mercadopago.com/v1/payment_methods/search?public_key=${MP_API_KEY}&locale=en&js_version=2.0.0&bins=${sixNumber}`
        )
        .then((value) => setResponse({ isLoading: false, data: value.data }))
        .catch((e) =>
          setResponse({ error: e.response.data.message, isLoading: false })
        );
    }
  }, [sixNumber]);
  return response;
};

export default GetTypeCard;
