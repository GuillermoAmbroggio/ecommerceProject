import { Router } from 'express';
import {
  Address,
  Colors,
  Orders,
  OrdersProducts,
  PaymentDetail,
  PaymentsCards,
  Products,
  Sizes,
  Stores,
  Users,
} from '../../../models';

const pruebas = Router();

pruebas.get('/cargarBD', async (req, res, next) => {
  try {
    //CREO DATOS SOLO PARA PROBRAR:
    const user1 = await Users.create({
      name: 'ASD',
      lastname: 'ASDd',
      email: 'asd@gmail.com',
      password: 'sD555ASD',
      role: 'admin',
    });
    const size1 = await Sizes.create({
      size: '90',
    });
    const size2 = await Sizes.create({
      size: '100',
    });
    /*  // crea de nuevo el size 90 si ya existia en la bd se crearia 2 veces.
    Products.create(
      {
        name: 'producto1',
        description: 'descripcion prod 1',
        images: JSON.stringify([{ title: 'imagen prod 1', url: 'urlproducto1' }]),
        price: 55,
        sizes: [{ size: '90' }], 
      },
      {
        include: Sizes,
      }
    ); */

    const paymentCard1 = await PaymentsCards.create({
      customer_id: '1069698391-Etuj64PzbVER2w',
      user_id: '1',
    });

    paymentCard1.$set('user', user1);

    const store1 = await Stores.create({
      name: 'Tienda 1',
      street: 'calle de tienda',
      street_number: 'SN',
      zip_code: '3500',
      aditional_info: 'Horario de atencion de 9 a 18 hs.',
      city: 'Cordoba',
      state: 'Cordoba',
      country: 'Arg',
      phone: '11-456789',
    });

    const address1 = await Address.create({
      street_number: '55',
      city: 'cordoba',
      name: 'casa oficial',
      state: 'cordoba',
      street: 'av chacabuc',
      zip_code: '5000',
      apartment: '7B',
    });

    const product1 = await Products.create({
      name: 'producto1',
      description: 'descripcion prod 1',
      default_image: 'imagen1',
      price: 55,
      stock: JSON.stringify([
        { size: 60, details: [{ color: 'red', quantity: 5 }] },
      ]),
    }); /* .then((p) => {
       SizesProducts.bulkCreate([
        {
          productId: p.id,
          sizeId: 1,
        },
        { productId: p.id, sizeId: 2 },
      ]); 
    }); */

    const product2 = await Products.create({
      name: 'producto2',
      description: 'descripcion prod 2',
      price: 55,
      stock: '5' /* JSON.stringify([
        { size: 60, details: [{ color: 'red', quantity: 5 }] },
      ]), */,
    });

    Colors.create({
      color: 'red',
    });
    const date = new Date();
    date.setDate(date.getDate() + 2);
    console.log('pruebas 97', date);
    const order1 = await Orders.create({
      payment_method_name: 'card',
      status: 'generated',
      total: 999,
      sub_total: 999,
      expected_delivery_date: date,
    });

    const order2 = await Orders.create({
      payment_method_name: 'transfer',
      status: 'generated',
      total: 999,
      sub_total: 999,
      expected_delivery_date: date,
    });

    const paymentdetail = await PaymentDetail.create({
      payment_method_name: 'card',
      status: 'unpaied',
      card_id: '1645451496969',
      customer_id: '1069698391-Etuj64PzbVER2w',
    });

    const paymentdetail2 = await PaymentDetail.create({
      payment_method_name: 'transfer',
      status: 'unpaied',
      bank: 'Brubank',
      cbu: '12315456465',
    });

    order1.$set('user', user1);
    order1.$set('payment_detail', paymentdetail);
    order1.$set('stores', store1);

    order2.$set('user', user1);
    order2.$set('payment_detail', paymentdetail2);
    // order2.$set('products', product1);
    OrdersProducts.bulkCreate([
      {
        product_id: product1.id,
        order_id: order2.id,
        quantity: 5,
      },
      {
        product_id: product2.id,
        order_id: order2.id,
        quantity: 2,
      },
    ]);
    res.send('ok');
  } catch (e: any) {
    res.status(404).send(e.message);
  }
});

export default pruebas;
