import { Router, Request } from 'express';
import isAuthenticate from '../../../hooks/authentication/isAuthenticate';
import { validateEmptyField } from '../../../hooks/validations/useValidations';
import { Address } from '../../../models';
import { AddressAttributes } from '../../../models/address/address.types';

const editAddress = Router();
interface AddressReqBody extends AddressAttributes {
  [key: string]: string | undefined;
}

editAddress.put(
  '',
  isAuthenticate,
  async (req: Request<{}, {}, AddressReqBody>, res, next) => {
    try {
      const idUser = req.session.user.id;
      const addressId = req.body.id;

      /* Reviso los campos requeridos */
      const errorResponse = validateEmptyField({ addressId });
      if (errorResponse) {
        return res.status(400).send(errorResponse);
      }

      let object: { [key: string]: string | undefined } = req.body;
      for (const key in object) {
        if (!object[key]) {
          delete object[key];
        }
      }

      /* Reviso en la BD si existe la direccion*/
      const address = await Address.findOne({
        where: { user_id: idUser, id: addressId },
      });
      console.log('EDIT ADDRES 37', req.body, object);
      /* Si existe la puedo editar */
      if (address) {
        address
          .update({
            ...object,
            street_number: req.body.street_number ?? '',
          })
          .then((editAddress) => {
            res.send(editAddress);
          });
      } else {
        /* Si no tiene */
        res.send('No existe la dirección');
      }
    } catch (e: any) {
      res.status(404).send(e.message);
    }
  }
);

export default editAddress;
