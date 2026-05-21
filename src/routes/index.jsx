import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Product from "../pages/Product/Product";
import Layout from '../Layouts/Layout'
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorBoundary/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/product/:id", element: <Product /> }, 
    ],
  },
]);