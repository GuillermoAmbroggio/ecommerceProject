import { Router } from 'express';

import {
  users,
  products,
  cookieAuth,
  home,
  tokenAuth,
  googleAuth,
} from './components';
import address from './components/address';
import payments from './components/mercadoPago';
import orders from './components/orders';
import pruebas from './components/pruebas/pruebas';

const router = Router();

//Este eliminar:
router.use('/', pruebas);

router.use('/', cookieAuth);
router.use('/', tokenAuth);
router.use('/', googleAuth);
router.use('/home', home);
router.use('/users', users);
router.use('/products', products);
router.use('/payments', payments);
router.use('/address', address);
router.use('/orders', orders);

export default router;
