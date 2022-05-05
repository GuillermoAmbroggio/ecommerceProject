import { IPayment } from 'utils/types/PaymentTypes';

function usePaymentName(payment: IPayment): string {
  if (payment.card) {
    const names: { [key: string]: string } = {
      mastercard: 'Mastercard',
      visa: 'Visa'
    };
    return `${names[payment.card.cardName]} **** ${payment.card.lastNumbers}`;
  }

  if (payment.bank) {
    return `${payment.bank.nameBank} ******* ${String(
      payment.bank.fromCbu
    ).substr(-5)}`;
  }
  return 'Efectivo';
}
export default usePaymentName;
