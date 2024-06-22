import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

  const [coinData, setCoinData] = useState();

  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const getData = async () => {
    try {
      let res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        {
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-AGXJ8jQiW4FvsMW2qStsLejb",
          },
        }
      );
      setCoinData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [currency]);

  const contextValue = {
    coinData,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
