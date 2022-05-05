export type IShippingMethod = 'correo' | 'oca' | undefined;

export type IAddress = {
  id: number;
  street: string;
  streetNumber: string | null; // opcion de "sin numero"
  apartment?: string;
  zipCode: string;
  alias?: string;
  aditionalInformation?: string;
  city: string;
  state: string;
  phone?: string;
  isDefault?: boolean;
};

export type IShipping = {
  method: IShippingMethod;
  price: number;
  estimatedDelivery: Date;
  address: IAddress;
};

export type IStore = {
  id: number;
  address: string; // direccion
  atentionTime: string; // horario de atencion
  city: string;
  zipCode: string;
  state: string;
};
