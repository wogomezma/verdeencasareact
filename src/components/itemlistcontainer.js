import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./Itemlist";
import { item } from "../mocks/item.mock";

const ItemListContainer = () => {
const { category } = useParams();
const [products, setProducts] = useState([]);

useEffect(() => {
    new Promise((resolve) =>
    setTimeout(() => {
        resolve(item);
    }, 2000)
    ).then((data) => {
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

if (products.length === 0) {
    return <p>Cargando...</p>
}

return (
    <div>
    <ItemList products={products} />
    </div>
);
};

export default ItemListContainer;