import React, { createContext, useState, useEffect } from "react";
import swal from "sweetalert";

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log("productsAdded",productsAdded);
  useEffect(() => {
    const amount = productsAdded
      .map((product) => parseInt(product.item.price) * product.quantityAdded)
      .reduce((partialSum, a) => partialSum + a, 0);
    setTotalAmount(amount);
  }, [productsAdded]);


  function addItem(item, quantity) {
    const isAlreadyAdded = isInCart(item.id);
    if (isAlreadyAdded) {
      setProductsAdded((prevState) =>
        prevState.map((productAdded) =>
          productAdded.item.id === item.id
            ? {
                ...productAdded,
                quantityAdded: productAdded.quantityAdded + quantity,
              }
            : productAdded
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ item, quantityAdded: quantity })
      );
    }
  }

  function removeItem(itemId) {

    swal({
      title: "Estas Seguro?",
      text: "Estas a un paso de mejorar tu salud, te recomendamos no dejar pasar esta oportunidad",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setProductsAdded((prevState) =>
      prevState.filter((product) => product.item.id !== itemId)
    );
        swal("Producto Eliminado", {
          icon: "success",
        });
      } else {
        swal("Excelente eleccion, da click en CheckOut para Finalizar Compra :)");
      }
    });

    
  }

  function clear() {
    setProductsAdded([]);
    setTotalAmount(0);
  }

  function isInCart(itemId) {
    return Boolean(productsAdded.find((product) => product.item.id === itemId));
  }


  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        productsAdded,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};