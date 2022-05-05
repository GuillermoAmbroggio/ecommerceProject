export type IProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
};

export interface IProductOrder {
  id: number;
  title: string;
  price: number;
  image?: string;
  quantity: number; // cantidad del producto en la orden.
}
