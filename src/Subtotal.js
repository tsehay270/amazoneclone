import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => amount + item.price, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal({basket.length} itmes):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
