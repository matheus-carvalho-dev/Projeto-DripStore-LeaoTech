import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Layout from '../Layouts/Layout'
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";
import Product from "../pages/Product/Product";
import NotFound from "../pages/NotFound/NotFound";
import AuthPage from "../pages/Auth/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Search /> },
      { path: "/search", element: <Search /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/auth", element: <AuthPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);