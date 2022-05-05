import { Router, Request } from 'express';
import isAuthenticate from '../../../hooks/authentication/isAuthenticate';
import { validateEmptyField } from '../../../hooks/validations/useValidations';
import {
  Address,
  Orders,
  OrdersProducts,
  PaymentDetail,
  Products,
  Stores,
  Users,
} from '../../../models';
import { OrderReqBody } from '../../../models/orders/orders.types';
import { ProductsAttributes } from '../../../models/products/products.types';
import { getCard } from '../mercadoPago/utils';

const getOrders = Router();

getOrders.get(
  '',
  /*isAuthenticate,*/
  async (req, res, next) => {
    try {
      const { ENV, API_URL_DEV, API_URL_PROD } = process.env;
      const url = ENV === 'development' ? API_URL_DEV : API_URL_PROD;
      const orders = await Orders.findAll({ include: [Users, PaymentDetail] });
      console.log('get ordedr 17', orders[0], 'user:', orders[0].user);
      res.send(orders);
      /*      const resultsPerPage = 10; // maximo 10 por pagina.
       const totalPage = Math.ceil(orders.length / resultsPerPage) || 1;
       let selectPage = req.query.page ? Number(req.query.page) : 1;
       if (selectPage > totalPage) {
         selectPage = totalPage;
       }
       res.json({
         count: orders.length,
         next:
           selectPage === totalPage
             ? null
             : `${url}/users?page=${selectPage + 1}`,
         previous:
           selectPage === 1 ? null : `${url}/users?page=${selectPage - 1}`,
         results: orders
           .slice(
             selectPage * resultsPerPage - resultsPerPage,
             selectPage * resultsPerPage
           )
           .map((order) => {
             return { ...order.toJSON()}; // Con esto se evita mostrar password & role.
           }),
       }); */
    } catch (e: any) {
      res.status(404).send(e.message);
    }
  }
);

/* Busca una sola orden por id */
getOrders.get(
  '/:orderId',
  /*isAuthenticate,*/ async (req, res, next) => {
    try {
      const { orderId } = req.params;
      /* Reviso en la BD si existe la orden */
      const order = await Orders.findByPk(orderId, {
        include: [Stores, Address, PaymentDetail, OrdersProducts, Products],
      });
      /* Si existe esa orden con ese Id */
      if (order) {
        console.log('GET ORDER 68-------------', order.toJSON());
        /* Si se pago con tarjeta, busco la informacion de la tarjeta */
        if (
          order.payment_method_name === 'card' &&
          order.payment_detail?.card_id &&
          order.payment_detail.customer_id
        ) {
          getCard({
            cardId: order.payment_detail?.card_id,
            customer_id: order.payment_detail?.customer_id,
          })
            .then(({ data: dataCard }) => {
              return res.send({
                ...order.toJSON(),
                payment_detail: dataCard,
                payment_status: order.payment_detail?.status,
                shipping_address_id: undefined,
                store_id: undefined,
                payment_detail_id: undefined,
                products_detail: order.products_detail?.map((e) => {
                  return { product_id: e.product_id, quantity: e.quantity };
                }),
              });
            })
            .catch((e) => {
              return res.status(400).send(e.response.data);
            });
        }

        /* Si se pago por transferencia, busco la informacion de la tarjeta */
        if (order.payment_method_name === 'transfer') {
          return res.send({
            ...order.toJSON(),
            payment_detail: {
              bank: order.payment_detail?.bank,
              cbu: order.payment_detail?.cbu,
            },
            payment_status: order.payment_detail?.status,
            shipping_address_id: undefined,
            store_id: undefined,
            payment_detail_id: undefined,
            products_detail: order.products?.map((e) => {
              return {
                product_id: e.id,
                quantity: e.OrdersProducts.quantity,
                default_image: e.default_image,
                stock: e.stock,
              };
            }),
          });
        }
      } else {
        /* Si no existe */
        res.send('No se encontró ninguna orden');
      }
    } catch (e: any) {
      res.status(404).send(e.message);
    }
  }
);

export default getOrders;
