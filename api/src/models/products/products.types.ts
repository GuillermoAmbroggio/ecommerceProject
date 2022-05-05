import { OrdersProducts, Sizes } from '..';
import { CategoriesAttributes } from '../categories/categories.types';
import { ColorsAttributes } from '../colors/colors.types';
import { OrdersProductsAttributes } from '../relationship/ordersProducts/ordersProducts.types';
import { SizesAttributes } from '../sizes/sizes.types';

export interface ProductsAttributes {
  id?: number;
  name: string;
  price: number;
  description: string;
  default_image: string;
  images?: { title: string; url: string }[];
  categories: { name: string; id: number }[];
  stock: StockType;
}

export interface ProductsModelAttributes {
  id?: number;
  name: string;
  price: number;
  description: string;
  images?: string;
  default_image?: string;
  categories?: CategoriesAttributes[];
  stock: string;
}

export type StockType = {
  size: number;
  total_quantity?: number;
  colors?: string[];
  details: { color: string; quantity: number }[];
}[];
