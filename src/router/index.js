import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../view/cart";
import Category from "../view/category";
import Item from "../view/item";
import Checkout from "../view/checkout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
  {
    path: "/item/:id",
    element: <Item />,
  },
  { path: "/checkout", element: <Checkout /> }
]);