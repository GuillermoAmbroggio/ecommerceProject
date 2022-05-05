export { default as getUser } from './user/getUser';
export { default as postLogin } from './auth/postLogin';
export { default as postRegister } from './auth/postRegister';
export { default as postLogout } from './auth/postLogout';
export { default as postEditUser } from './user/postEditUser';
export { default as postEditPassword } from './user/postEditPassword';

/* Mercado Pago Request */
export { default as getIdentifications } from './mercadoPago/getIdentifications';
export { default as getTypeCard } from './mercadoPago/getTypeCard';

/* Tarjetas Request */
export { default as getPayments } from './payments/getPayments';
export { default as postPayment } from './payments/postPayment';
export { default as deletePayment } from './payments/deletePayment';

/* Direcciones Request */
export { default as getAddress } from './address/getAddress';
export { default as postAddress } from './address/postAddress';
export { default as putAddress } from './address/putAddress';
export { default as deleteAddress } from './address/deleteAddress';
