import React from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { BsFillCartFill } from 'react-icons/bs';

const CartWidget = () => {
  const productsAdded = useContext(CartContext);
  const count = productsAdded.length;
console.log("CartWidget",productsAdded);
  return (
    <div>
      <Link to="/cart">
        <button
          type="button"
          class="btn btn-outline-dark mt-auto"
          >
          <BsFillCartFill />
        </button>
        {count > 0 && (
          <span class="fw-bolder">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;