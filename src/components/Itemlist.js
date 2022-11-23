import Item from "./Item";
const ItemList = ({item}) =>{
    return (
        <ul>
            {item.map((product) =>( 
            <Item item={item}/>
            ))}
        </ul>
    );
};
export default ItemList;