import { Router } from 'express';
import addAddress from './addAddress';
import deleteAddress from './deleteAddress';
import editAddress from './editAddress';
import getAddress from './getAddress';

const address = Router();

address.use('', addAddress);
address.use('', getAddress);
address.use('', editAddress);
address.use('', deleteAddress);

export default address;
