import React from "react";
import "./Checkoutproduct.css";
import { useStateValue } from "./StateProvider";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";

function Checkoutproduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removefromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct_image" src={image} alt="" />
      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map(() => {
              const iRate = (
                <p>
                  <StarHalfOutlinedIcon />
                </p>
              );
              return iRate;
            })}
        </div>
        {!hideButton && (
          <button onClick={removefromBasket}>Remove from basket</button>
        )}{" "}
      </div>
    </div>
  );
}

export default Checkoutproduct;
