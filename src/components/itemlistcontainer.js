import { useState } from "react";
import ItemList from "./Itemlist";
import { item } from "../mocks/item.mock";


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const productList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(item);
    }, 3000)
  );

  productList.then((data) => setProducts(data));

  return (
    <section class="py-5">
    
            <ItemList products={products} />

    </section>
  );
};

export default ItemListContainer;