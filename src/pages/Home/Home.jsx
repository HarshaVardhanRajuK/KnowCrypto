import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

import "./Home.css";

const Home = () => {
  const { coinData, currency } = useContext(CoinContext);

  const [displayCoin, setDisplayCoin] = useState([]);

  const [input, setInput] = useState("");
  const [loading, setloading] = useState(true)

  useEffect(() => {
    if (coinData) {
      setDisplayCoin(coinData);
      setloading(false)
    }
  }, [coinData]);


  function onchangeInput(e) {
    setInput(e.target.value);

    if (e.target.value === "") {
      setDisplayCoin(coinData);
    }
  }

  async function searchHandler(e) {
    e.preventDefault();

    let filteredCoins = await coinData.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
  }

  return (
    <>
      <div className="home">
        <div className="description">
          <h1>
            All Your Crypto Trackings <br />@ one place
          </h1>
          <p>
            Explore cryptocurrency insights, including real-time price changes,
            interactive price change charts and many more..
          </p>
          <form onSubmit={(e) => searchHandler(e)}>
            <input
              onChange={(e) => onchangeInput(e)}
              value={input}
              type="text"
              list="coinnames"
              placeholder="Search among 100 coins..."
              required
            />
            <datalist id="coinnames">
              {displayCoin.map((coin, index) => (
                <option key={index} value={coin.name} />
              ))}
            </datalist>
            <button type="submit">Get Info</button>
          </form>
        </div>

        <div className="data-table">
          <div className="layout">
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>24hr Change</p>
            <p className="market-cap">Market Cap</p>
          </div>
          {loading && <center style={{minHeight: "200px", display: "grid", placeItems: "center"}}><PacmanLoader color="white"/></center>}
            <center style={{color: "gray", marginTop:"8px", fontSize: "12px"}}>Click to get Chart info</center>
          {displayCoin.slice(0, 20).map((coin) => {
            return (
              <Link
                to={`/coin/${coin.id}`}
                className="layout"
                key={coin.market_cap_rank}
              >
                <p>{coin.market_cap_rank.toLocaleString()}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <img src={coin.image} alt="logo" />
                  <p style={{ flex: 1 }}>{`${coin.name} - ${coin.symbol}`}</p>
                </div>
                <p>
                  {currency.symbol}
                  {coin.current_price.toLocaleString()}
                </p>
                <p className={coin.price_change_24h > 0 ? "green" : "red"}>
                  {Math.floor(coin.price_change_24h * 100) / 100}
                </p>
                <p className="market-cap">
                  {currency.symbol} {coin.market_cap.toLocaleString()}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
