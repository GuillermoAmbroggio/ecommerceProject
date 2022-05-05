import { ImageSourcePropType } from 'react-native';
import { ICardTypes, IPaymentOptions } from 'utils/types/PaymentTypes';

function usePaymentIcon(
  option: IPaymentOptions,
  nameCard?: ICardTypes
): {
  source: ImageSourcePropType;
} {
  const iconUrl = { source: require('assets/paymentTypes/visa.png') };
  if (option === 'card') {
    if (nameCard === 'mastercard')
      iconUrl.source = require('assets/paymentTypes/mastercard.png');
  }
  if (option === 'cash')
    iconUrl.source = require('assets/paymentTypes/cash.png');
  if (option === 'posnet')
    iconUrl.source = require('assets/paymentTypes/posnet.png');
  if (option === 'bank')
    iconUrl.source = require('assets/paymentTypes/bank.png');

  return iconUrl;
}
export default usePaymentIcon;
