import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Layout from '../Layouts/Layout'
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";
import Product from "../pages/Product/Product";
import NotFound from "../pages/NotFound/NotFound";
import Cart from "../pages/Cart/Cart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Cart/> },
      { path: "/search", element: <Search /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/carrinho", element: <Cart /> },
      { path: "*", element: <NotFound/> },
    ],
  },
]);