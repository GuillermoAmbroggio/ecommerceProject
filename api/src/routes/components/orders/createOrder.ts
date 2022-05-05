import { Router, Request } from 'express';
import isAuthenticate from '../../../hooks/authentication/isAuthenticate';
import { validateEmptyField } from '../../../hooks/validations/useValidations';
import { Address, Stores } from '../../../models';
import { OrderReqBody } from '../../../models/orders/orders.types';

const createOrder = Router();

createOrder.post(
  '',
  /*isAuthenticate,*/
  async (req: Request<{}, {}, OrderReqBody>, res, next) => {
    try {
      const {
        shipping_address_id,
        store_id,
        payment_method_name,
        payment_detail,
      } = req.body;
      const idUser = req.session.user.id;

      /* Reviso que tenga una dirección o la tienda a recoger */
      if (!shipping_address_id && !store_id) {
        res
          .status(400)
          .send('Es necesario una dirección de entrega o tienda a retirar');
      }

      /* Reviso que los campos requeridos no vengan vacios */
      const objectNoNull = {
        payment_method_name,
      };
      const errorResponse = validateEmptyField(objectNoNull);
      if (errorResponse) {
        return res.status(400).send(errorResponse);
      }

      /* Si el metodo de pago no es efectivo, tiene que mandar los detalles */
      if (payment_method_name !== 'cash' && !payment_detail) {
        res.status(400).send('El campo payment_detail es requerido');
      }

      /* Busco la dirección en la BD */
      const shipping_address = shipping_address_id
        ? await Address.findOne({
            where: {
              id: shipping_address_id,
            },
          })
        : null;

      /* Busco la tienda en la BD */
      const store = store_id
        ? await Stores.findOne({
            where: {
              id: store_id,
            },
          })
        : null;

      console.log('CREATE ORDER 50', shipping_address, store);
      res.send('ok');
    } catch (e: any) {
      res.status(404).send(e.message);
    }
  }
);

export default createOrder;
