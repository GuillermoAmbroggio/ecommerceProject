import { Router } from 'express';
import addProduct from './addProduct';
import searchProduct from './searchProduct';

const products = Router();

products.use('', addProduct);
products.use('', searchProduct);

export default products;
