import { BsFillCartFill } from 'react-icons/bs';

function Cartwidget() {
    return (
        <button class="btn btn-outline-dark" type="submit">
        <i class="bi-cart-fill me-1"></i>
        <BsFillCartFill />
        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
    </button>
    );
}

export default Cartwidget;