import React, { useContext } from "react";
import "./Navbar.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  let { setCurrency } = useContext(CoinContext);

  const currrencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      }
      case "inr": {
        setCurrency({
          name: "inr",
          symbol: "₹",
        });
        break;
      }
      default: {
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      }
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">
          <p>
            KnowCrypto<span>.</span>
          </p>
        </div>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Contact</li>
        <li>Pricing</li>
      </ul>
      <div className="nav-right">
        <select onChange={currrencyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">eur</option>
        </select>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
