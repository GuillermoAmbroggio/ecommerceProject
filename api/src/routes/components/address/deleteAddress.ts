import { Router, Request } from 'express';
import isAuthenticate from '../../../hooks/authentication/isAuthenticate';
import { Address } from '../../../models';
import { AddressAttributes } from '../../../models/address/address.types';

const deleteAddress = Router();

deleteAddress.delete(
  '',
  isAuthenticate,
  async (req: Request<{}, {}, { id: string }>, res, next) => {
    try {
      const idUser = req.session.user.id;
      const address_id = req.body.id;

      if (!address_id) {
        return res.status(400).send('El campo address_id es requerido');
      }

      /* Reviso en la BD si existe la direccion*/
      const address = await Address.findOne({
        where: { user_id: idUser, id: address_id },
      });

      /* Si existe la elimino */
      if (address) {
        address.destroy().then(() => {
          res.send(address);
        });
      } else {
        /* Si no tiene */
        res.send('No existe una dirección con ese id');
      }
    } catch (e: any) {
      res.status(404).send(e.message);
    }
  }
);

export default deleteAddress;
