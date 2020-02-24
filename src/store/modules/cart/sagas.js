import {call, select, put, all, takeLatest} from 'redux-saga/effects';

import {showMessage} from 'react-native-flash-message';

// import api from '../../../services/api'; //WITH API SERVER
import db from '../../../../database';
import {formatPrice} from '../../../util/format';

import {addToCartSuccess, updateAmountSuccess} from './actions';

function* addToCart({id}) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id),
  );

  // const stock = yield call(api.get, `stock/${id}`); //WITH API SERVER
  //const stockAmount = stock.data.amount; //WITH API SERVER
  const stock = db.stock.find(p => p.id === id);
  const stockAmount = stock.amount;

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    showMessage({
      message: 'Quantidade solicitada fora de estoque',
      type: 'danger',
    });
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    // const response = yield call(api.get, `products/${id}`); //WITH API SERVER
    const response = db.products.find(p => p.id === id);

    const data = {
      //...response.data, //WITH API SERVER
      ...response,
      amount: 1,
      //priceFormatted: formatPrice(response.data.price) //WITH API SERVER
      priceFormatted: formatPrice(response.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({id, amount}) {
  if (amount <= 0) return;

  // const stock = yield call(api.get, `stock/${id}`); //WITH API SERVER
  //const stockAmount = stock.data.amount; //WITH API SERVER
  const stock = db.stock.find(p => p.id === id);
  const stockAmount = stock.amount;

  if (amount > stockAmount) {
    showMessage({
      message: 'Quantidade solicitada fora de estoque',
      type: 'danger',
    });
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
