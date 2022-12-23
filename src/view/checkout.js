import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/cartContext";
import swal from "sweetalert";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const CheckoutView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;
    const email2 = event.target[3].value;

    
    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email, email2 },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});

     
  };



  const validaremail = (event) => {
    event.preventDefault();
    const emailv = event.target[2].value;
    const emailv2 = event.target[3].value;

    if (emailv.length > 0){
      if(emailv !== emailv2){
        alert("Correo:" +emailv +". no coincide con el campo de validacion de correo:" +emailv2 +". Favor validar");
      } else {
        console.log("Correo si coincide");
        handleFinalizePurchase(event)
        
      }
      }
    }





  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();
      

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            const idcompra = itemRef.id
            clear();
            setIsLoading(false);
            console.log("elemento comprado con ID:", idcompra);
            swal("Compra finalizada")
              .then((idcompra) => {
                swal("Compra finalizada", `Te confirmamos que tu compra sera preparada y enviada con el ID${idcompra}`, "success");
              });         
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatingProducts]);


  

  return (
    <Layout>
      <form onSubmit={validaremail} class="row g-3 needs-validation card-body p-4">
        <div class="mb-3">
        <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nombre Completo</label>
          <input
            type="text" class="form-control" id="formGroupExampleInput"
            placeholder="Nombre Completo"
            required
          />
          </div>
          <div class="col-md-4">
          <label for="validationCustom05" class="form-label">Numero de Contacto</label>
          <input
            class="form-control" id="validationCustom05"
            placeholder="Numero de Telefono"
            type="number"
            required
          />
          </div>
          <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">Correo Electronico</label>
          <input
            class="form-control" id="validationCustomUsername"
            placeholder="Email"
            type={"email"}
            required
          />
          </div>
          <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">Confirmar Correo Electronico</label>
          <input
            class="form-control" id="validationCustomUsername"
            placeholder="validar Email"
            type={"email2"}
            required
          />
          <div class="invalid-feedback">
            correo no es igual
          </div>
          </div>
        </div>
        <div class="col-md-4">
        <p class="fw-bolder">
          Total a pagar: <strong>${totalAmount}</strong>
        </p>
        <button
          type="submit"
          class="btn btn-outline-dark mt-auto text-center"
          disabled={isLoading}
        >
          Finalizar
        </button>
        </div>
      </form>
      
    </Layout>
  );
};

export default CheckoutView;