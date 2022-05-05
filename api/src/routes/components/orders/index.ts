import { Router } from 'express';
import createOrder from './createOrder';
import getOrders from './getOrders';

const orders = Router();

orders.use('', createOrder);
orders.use('', getOrders);

export default orders;
