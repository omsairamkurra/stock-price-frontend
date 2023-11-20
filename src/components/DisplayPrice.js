import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockPrice } from "../Redux/stocks/actions";
import { getSelectedStock, getStockData } from "../Redux/stocks/selectors";

const DisplayPrice = () => {
  const selectedStock = useSelector(getSelectedStock);
  const stockData = useSelector(getStockData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedStock) {
      dispatch(fetchStockPrice(selectedStock));
    }
  }, [dispatch, selectedStock]);

  return (
    <div className="price-container">
      {stockData ? (
        <div>
          <h2>{selectedStock} Price:</h2>
          <p>${stockData}</p>
        </div>
      ) : (
        <p>Select a stock to see its price.</p>
      )}
    </div>
  );
};

export default DisplayPrice;