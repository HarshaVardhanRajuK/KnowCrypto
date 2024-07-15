import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";
import axios from "axios";

import "./CoinDisplay.css";

const CoinDisplay = () => {
  let coinId = useParams();

  let { currency } = useContext(CoinContext);

  let [coinSpecificData, setCoinSpecificData] = useState("");
  let [history, setHistory] = useState("");

  useEffect(() => {
    getCoinData();
    getHistory();
  }, [currency]);

  const getCoinData = async () => {
    try {
      let res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId.id}`,
        {
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-AGXJ8jQiW4FvsMW2qStsLejb",
          },
        }
      );
      setCoinSpecificData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getHistory = async () => {
    try {
      let res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId.id}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        {
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-AGXJ8jQiW4FvsMW2qStsLejb",
          },
        }
      );
      setHistory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!coinSpecificData || !history) {
    return (
      <div className="spinner">
        <PacmanLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <>{console.log(history, coinSpecificData)}
      <div className="coin-page">
        <div className="coin-name">
          <img src={coinSpecificData.image.large} alt="" />
          <p>
            <b>
              {coinSpecificData.name} ({coinSpecificData.symbol})
            </b>
          </p>
        </div>
        <div className="line-chart">
          <LineChart history={history} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>#{coinSpecificData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {currency.symbol}{" "}
              {coinSpecificData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
              {currency.symbol}{" "}
              {coinSpecificData.market_data.market_cap[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hr high</li>
            <li>
              {currency.symbol}{" "}
              {coinSpecificData.market_data.high_24h[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 Hr Low</li>
            <li>
              {currency.symbol}{" "}
              {coinSpecificData.market_data.low_24h[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CoinDisplay;
