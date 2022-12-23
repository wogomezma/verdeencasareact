import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { BsFillCartFill } from 'react-icons/bs';

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  console.log({ itemId });

  
  return (
    <button
      onClick={() => removeItem(itemId)}
      class="btn btn-outline-dark mt-auto center"
    >
      <BsFillCartFill />
      <p>Vaciar Carrito</p>
    </button>
    
  );
};