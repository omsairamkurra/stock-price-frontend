import './App.css';
import React from "react";
import StockSelector from "./components/StockSelector";
import DisplayPrice from "./components/DisplayPrice";
import { Provider } from "react-redux";
import { configureStore } from "./Redux/Store";
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Mini Stock Price Tracker</h1>
        <StockSelector stockList={["AMAZON", "GOOGLE", "MICROSOFT", "TESLA"]} />
        <DisplayPrice />
      </div>
    </Provider>
  );
}

export default App;
