import { Router, Request } from 'express';
import isAuthenticate from '../../../hooks/authentication/isAuthenticate';
import { validateEmptyField } from '../../../hooks/validations/useValidations';
import { Address } from '../../../models';
import { AddressAttributes } from '../../../models/address/address.types';

const addAddress = Router();
addAddress.post(
  '',
  isAuthenticate,
  async (req: Request<{}, {}, AddressAttributes>, res, next) => {
    try {
      const {
        name,
        aditional_info,
        city,
        state,
        street,
        street_number,
        zip_code,
        country,
        phone,
      } = req.body;
      const objectNoNull = {
        street,
        zip_code,
        state,
        city,
      };
      /* Reviso los campos requeridos */
      const errorResponse = validateEmptyField(objectNoNull);
      if (errorResponse) {
        return res.status(400).send(errorResponse);
      }
      const idUser = req.session.user.id;

      Address.create({
        name,
        aditional_info,
        city,
        state,
        street,
        street_number,
        zip_code,
        country,
        phone,
        user_id: String(idUser),
      }).then((address) => {
        res.send(address);
      });
    } catch (e: any) {
      res.status(404).send(e.message);
    }
  }
);

export default addAddress;
