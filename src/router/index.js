import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../view/category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
]);