const Item = ({ product }) => {
    return (
    <div>
        <li>{product.name}</li>
        <img src={product.img} />
        <li>{product.description}</li>
        <button type="button" >ver Producto</button>
    </div>
    );
};

export default Item;