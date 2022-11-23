import { Link } from "react-router-dom";
import Cartwidget from "./cartwidget";

function Navbar() {
    return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">VerdeEnCasa</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">Inicio</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/category/infusiones">Categorias</Link></li>
                        <li class="nav-item dropdown">
                            <Link  class="nav-link dropdown-toggle" id="navbarDropdown" to="/category/infusiones" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</Link >
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/category/infusiones">Productos</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" to="/category/infusiones">Articulos Destactados</Link></li>
                                <li><Link class="dropdown-item" to="/category/infusiones">Nuevos Productos</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                    <Cartwidget />
                    </form>
                </div>
            </div>
        </nav>

    );


}

export default Navbar;