export const capitalizeFirstLetter: (str: string) => string = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function priceFormat(num: number): string {
  const parts = num.toString().split(',');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `$ ${parts.join(',')}`;
}
