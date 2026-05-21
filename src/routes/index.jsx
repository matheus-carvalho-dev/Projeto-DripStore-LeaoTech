import { createBrowserRouter } from "react-router-dom";
// import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Product from "../pages/Produtos/Produtos";
import Produtos from "../pages/Produtos/Produtos";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos />},
      { path: "/search", element: <Search /> },
      { path: "/product/:id", element: <Product /> }, 
    ],
  },
]);