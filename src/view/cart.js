import { useContext }  from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/img/empty.png";
import { Item } from "../components/Item";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";

const CartView = () => {
  const navigate = useNavigate();
  const { productsAdded: items, totalAmount } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Layout>
      <div>
        {items.length === 0 ? (
          <div class="text-center">
            <img src={EmptyCart} alt="Empty Cart"/>
            <h1 class="fw-bolder">No has agregado productos</h1>
            <button
              onClick={() => navigate("/")}
              class="btn btn-outline-dark mt-auto"
            >
              Ir al Inicio
            </button>
          </div>
        ) : (
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div class="row align-items-center text-center">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    
                    <TrashWidget itemId={product.item.id} />
                    
                  </div>
                );
              })}
            </div>
            <div class="row align-items-center text-center">
              <div >
                <p >
                  Total a pagar: <strong>${totalAmount}</strong>
                </p>
               
                <button
                  onClick={goToCheckout}
                  class="btn btn-outline-dark mt-auto"
                >
                  Ir al Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;