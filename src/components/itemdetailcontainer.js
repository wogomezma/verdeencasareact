import ItemDetail from "./itemdetail";
import { useGetItem } from "../hooks/useGetItem";

const ItemDetailContainer = () => {
    const item = useGetItem();
  
    if (!item) {
      return <p>Cargando...</p>;
    }
  
    return (
      <div>
        <ItemDetail item={item} />
      </div>
    );
  };
  
  export default ItemDetailContainer;