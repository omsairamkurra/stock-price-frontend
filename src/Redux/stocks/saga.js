import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import { fetchStockPriceAPI } from "../../API/index"

import {
  FETCH_STOCK_PRICE,
  fetchStockPriceSuccess,
  fetchStockPriceFailed,
} from "../stocks/actions";

function* fetchStockPrice(action) {
  try {
    const response = yield call(fetchStockPriceAPI, action.payload);
    yield put(fetchStockPriceSuccess(response.price));
    if (response && response.price) {
      yield put(fetchStockPriceSuccess(response.price));
    } else {
      yield put(fetchStockPriceFailed("Invalid API response"));
    }
  } catch (error) {
    yield put(fetchStockPriceFailed(error.message));
  }
}

function* stockSaga() {
  yield takeLatest(FETCH_STOCK_PRICE, fetchStockPrice);
}

export default function* rootSaga() {
  yield all([fork(stockSaga)]);
}