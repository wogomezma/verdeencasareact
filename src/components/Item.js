const Item = ({ product }) => {
    return (
        <div class="col mb-5">
        <div class="card h-100">
        <img src={product.img} className="card-img-top" alt="Product" />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">{product.name}</h5>
                <h5 class="fw-bolder">${product.price}</h5>
            </div>
        </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#!">Ver Producto</a></div>
            </div>
            </div>
            </div>
    );
  };
  
  export default Item;