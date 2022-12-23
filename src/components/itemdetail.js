import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";
import { useGetItemImg } from "../hooks/useGetItemImg";
import swal from "sweetalert";

  const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;
  const img = useGetItemImg(item.img);


   function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  
  function handleAdd() {
    if (currentStock < count) swal("Lo sentimos, no se tiene stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
      swal("Producto Agregado", "Te confirmamos que tu producto fue agregado, para continuar puedes dar click en Finalizar Compra", "success");
     }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    
    <div >
      <div class="text-center">
        {!img ? (
          <p>Cargando...</p>
        ) : (
          <img src={img}  alt={item.name} />
        )}
      </div>
          
      <div class="text-center">
        <h2 class="fw-bolder">{item.name}</h2>
        <p>{item.description}</p>
        <span class="fw-bolder">
          Precio: <strong>${item.price}</strong>
        </span>
        {currentStock > 0 && (
          <p>En Stock: {currentStock}</p>
        )}

        <div class="text-center">
           {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span>Sin stock</span>
          )}
          <div class="text-center">
            <button
              class="btn btn-outline-dark mt-auto"
              onClick={handleAdd}
              disabled={currentStock === 0}>
              Agregar al carrito
            </button>
            <button
              class="btn btn-outline-dark mt-auto"
              disabled={!isInCart(item.id)}
              onClick={handleCheckout}>
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;