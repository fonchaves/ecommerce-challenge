import numeral from 'numeral';
import 'numeral/locales/pt-br';

numeral.locale('pt-br');

export const formatPrice = num => `R$ ${numeral(num).format('0,0.00')}`;

export function calcDesc(item) {
  const {price_total, price} = item;
  const discount = (price_total / price - 1) * 100;
  return discount.toFixed();
}
