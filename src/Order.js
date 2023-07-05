import React from "react";
import "./Order.css";
import Checkoutproduct from "./Checkoutproduct";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYYY,h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <Checkoutproduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Order Total:{value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
