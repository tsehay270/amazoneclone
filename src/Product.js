import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
// import GradeIcon from "@mui/icons-material/Grade";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const AddToBasket = () => {
    //dispatch the item into the data layer
    return dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => {
              const iRate = (
                <p>
                  <StarHalfOutlinedIcon />
                  {/* <GradeIcon /> */}
                </p>
              );
              return iRate;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={AddToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
