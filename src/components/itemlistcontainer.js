/* import { useState,useEffect } from "react";
import ItemList from "./Itemlist";
import { item } from "../mocks/item.mock";
import { useParams } from "react-router-dom";
import { useGetItem } from "../hooks/useGetItem";
 */


/* const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const {category}= useParams(); */


/*   const productList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(item);
    }, 3000)
  );

  productList.then((data) => setProducts(data)); */

  /* useEffect(() => {
    new Promise((resolve) => {
      setProducts([]);

      return setTimeout(() => {
        resolve(item);
      }, 1000);
    }).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (!item) {
    return <p>Cargando...</p>
}

  return (
    <section class="py-5">
    
            <ItemList products={products} />

    </section>
  );
};

export default ItemListContainer; */

import { useGetItem } from "../hooks/useGetItem";
import ItemList  from "./Itemlist";

const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return <p>Cargando...</p>;
  }

  return (
    <div class="py-5">
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;