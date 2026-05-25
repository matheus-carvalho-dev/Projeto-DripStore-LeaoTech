import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Produtos from "../pages/Produtos/Produtos";
import Layout from '../Layouts/Layout'
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";
import Product from "../pages/Product/Product";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorBoundary/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos />},
      { path: "/search", element: <Search /> },
      { path: "/product", element: <Product/>}, 
    ],
  },
]);