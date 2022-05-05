import { Router, Request } from 'express';
import isAuthenticate from '../../../hooks/authentication/isAuthenticate';
import {
  isNumber,
  validateEmptyField,
} from '../../../hooks/validations/useValidations';
import { Products } from '../../../models';
import {
  ProductsAttributes,
  StockType,
} from '../../../models/Products/Products.types';

const addProduct = Router();

/* 
Voy a recibir un object llamado  stock:
stockRecibo = [
  {
    size: 80,
    details: [
      {
        color: 'blue',
        quantity: 10,
      },
      {
        color: 'black',
        quantity: 10,
      },
    ],
  },
]; 
Y mando un objeto :
stockMando = [
  {
    size: 80,
    totalQuantity: 20,
    colors: ['blue', 'black'],
    details: [
      {
        color: 'blue',
        quantity: 10,
      },
      {
        color: 'black',
        quantity: 10,
      },
    ],
  },
]; 
*/

// <---Agrega nuevo Productso--->
addProduct.post(
  '',
  isAuthenticate,
  async (req: Request<{}, {}, ProductsAttributes>, res, next) => {
    const { name, price, description, images, categories, stock } = req.body;
    const objectNoNull = { name, price, description, images, stock };
    Products.findOne({ where: { name } })
      .then((isExist) => {
        if (isExist) {
          return res
            .status(400)
            .send('A Products with that name already exists');
        } else {
          const errorResponse = validateEmptyField(objectNoNull);
          if (errorResponse) {
            return res.status(400).send(errorResponse);
          }
          if (!isNumber(price)) {
            return res
              .status(400)
              .send({ price: 'The format must be numeric' });
          }
          const stockObj: StockType = stock.map((e) => {
            const totalQuantity = e.details
              .map((d) => d.quantity)
              .reduce((acum, current) => acum + current);
            const colors = e.details.map((d) => d.color);
            return { ...e, totalQuantity, colors };
          });
          Products.create({
            ...objectNoNull,
            images: JSON.stringify(objectNoNull.images),
            stock: JSON.stringify(stockObj),
          }).then((p) => {
            res.send({
              ...p.toJSON(),
              images: JSON.parse(p.images),
              stock: JSON.parse(p.stock),
            });
          });
        }
      })
      .catch((e) => {
        res.status(400).send('Invalid parameter format');
      });
  }
);

export default addProduct;
