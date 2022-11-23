import { useEffect, useState } from "react";
import ItemDetail from "./itemdetail";

import { item as itemMock } from "../mocks/item.mock";

const ItemDetailContainer = () => {
const [item, setItem] = useState(null);

useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemMock[0]), 2000)).then(
    (data) => setItem(data)
    );
}, []);

if (!item) {
    return <p>Cargando...</p>
}

return <ItemDetail item={item} />;
};

export default ItemDetailContainer;