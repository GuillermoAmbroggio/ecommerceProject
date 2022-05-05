import { capitalizeFirstLetter } from 'utils/format/Format';
import { IShipping, IStore } from 'utils/types/ShippingTypes';

function useAddressName(shipping?: IShipping, store?: IStore): string {
  let name = '';
  if (shipping) {
    const street = capitalizeFirstLetter(shipping.address.street);
    name = street;
    if (shipping.address.streetNumber) {
      name = `${name} ${shipping.address.streetNumber}`;
    }
  }
  if (store) {
    name = store.address;
  }
  return name;
}
export default useAddressName;
