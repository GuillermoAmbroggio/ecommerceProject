import { Router, Request } from 'express';
import isAuthenticate from '../../../hooks/authentication/isAuthenticate';
import { Products, Users } from '../../../models';

const searchProduct = Router();

// <---Busca y muestra todos los productos--->
searchProduct.get('', isAuthenticate, async (req, res, next) => {
  const { ENV, API_URL_DEV, API_URL_PROD } = process.env;
  const url = ENV === 'development' ? API_URL_DEV : API_URL_PROD;
  const products = await Products.findAll();
  const resultsPerPage = 10; // maximo 10 por pagina.
  const totalPage = Math.ceil(products.length / resultsPerPage) || 1;
  let selectPage = req.query.page ? Number(req.query.page) : 1;
  if (selectPage > totalPage) {
    selectPage = totalPage;
  }
  res.json({
    count: products.length,
    next:
      selectPage === totalPage ? null : `${url}/users?page=${selectPage + 1}`,
    previous: selectPage === 1 ? null : `${url}/users?page=${selectPage - 1}`,
    results: products
      .slice(
        selectPage * resultsPerPage - resultsPerPage,
        selectPage * resultsPerPage
      )
      .map((product) => {
        return {
          ...product.toJSON(),
          images: JSON.parse(product.images),
          stock: JSON.parse(product.stock),
        };
      }),
  });
});

// <---Busca y muestra un producto especifico--->
searchProduct.get(
  '/:id',
  isAuthenticate,
  async (req: Request<{ id: string }, {}, {}>, res, next) => {
    const idProduct = req.params.id;
    const product = await Products.findByPk(idProduct);
    if (product) {
      res.send({
        ...product.toJSON(),
        images: JSON.parse(product.images),
        stock: JSON.parse(product.stock),
      });
    } else {
      res.status(404).send('Product not found');
    }
  }
);

export default searchProduct;
