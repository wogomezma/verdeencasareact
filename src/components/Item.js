
  import { useNavigate } from "react-router-dom";
  import { useGetItemImg } from "../hooks/useGetItemImg";

  export const Item = ({ product, quantityAdded }) => {
    const navigate = useNavigate();
    const img = useGetItemImg(product.img);
  
    const description = product.description.slice(0, 30);
    const title = product.name.slice(0, 20);
  
    function handleNavigate() {
      navigate(`/item/${product.id}`);
    }
  
    return (
      <div
        onClick={handleNavigate}
        class="card h-100"
        >
        <div >
        <img
          src={img}
          className="card-img-top"
          alt="Product"
        />
          <div class="text-center">
          <h5 class="fw-bolder"> {product.name.length > 20 ? `${title} ...` : product.name}</h5>
          </div>
        
        
          <p>
            {product.description.length > 30
              ? `${description} ...`
              : product.description}
          </p>
        
        <div class="card-body p-4">
          <div class="text-center">
          <h5 class="fw-bolder">${product.price}</h5>
            <span>
              <h6>{quantityAdded ? "Agregados" : "En Stock"}:{" "}
              {quantityAdded || product.stock}</h6>
            </span>
            </div>
          </div>
        </div>
      </div>
    );
  };