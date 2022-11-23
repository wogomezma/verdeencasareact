const ItemDetail = ({ item }) =>{
    return (
        <div>
            <div>{item.name}</div>
            <img src= {item.photo} alt="" />
            <div>{item.description}</div>
        </div>
    );
};

export default ItemDetail;