import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Category from "../view/category";
import Item from "../view/item";


export const router = createBrowserRouter ([
{
    path: "/",
    element: <App />,   
},
{
    path: "/category/:category",
    element: <Category />,
},
{
    path: "/item/:id",
    element: <Item />,
}
]);