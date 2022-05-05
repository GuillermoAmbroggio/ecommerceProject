import { Router } from 'express';
import isAuthenticate from '../../../hooks/authentication/isAuthenticate';
import { Address, Stores } from '../../../models';

const getAddress = Router();

/* Busca todas las direcciones de un usuario */
getAddress.get('', isAuthenticate, async (req, res, next) => {
  try {
    const idUser = req.session.user.id;

    /* Reviso en la BD si el usuario tiene direcciones*/
    const addresses = await Address.findAll({
      where: {
        user_id: idUser,
      },
      order: [['id', 'DESC']],
    });

    /* Si tiene direcciones las muestro */
    if (addresses) {
      console.log('GET ADDRES 23', typeof addresses[0].id);
      res.send(addresses);
    } else {
      /* Si no tiene */
      res.send([]);
    }
  } catch (e: any) {
    res.status(404).send(e.message);
  }
});

/* Busca una sola direccion por id */
getAddress.get('/:addressId', isAuthenticate, async (req, res, next) => {
  try {
    const idUser = req.session.user.id;
    const { addressId } = req.params;
    /* Reviso en la BD si el usuario tiene direcciones*/
    const address = await Address.findOne({
      where: { user_id: idUser, id: addressId },
    });
    /* Si existe esa direccion con ese Id */
    if (address) {
      res.send(address);
    } else {
      /* Si no existe */
      res.send('No se encontró ninguna dirección');
    }
  } catch (e: any) {
    res.status(404).send(e.message);
  }
});

/* Busca todas las tiendas */
getAddress.get('stores', isAuthenticate, async (req, res, next) => {
  try {
    const stores = await Stores.findAll();

    if (stores) {
      res.send(stores);
    } else {
      res.send([]);
    }
  } catch (e: any) {
    res.status(404).send(e.message);
  }
});

export default getAddress;
