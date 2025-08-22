import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import AuthLayout from "../shared/layouts/AuthLayout";
import MainLayout from "../shared/layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import SalePage from "../pages/SalePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
    return (
      <Routes>
        {/* auth layout */}
        <Route element={<AuthLayout />}>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.signup} element={<SignupPage />} />
        </Route>
  
        {/* main layout */}
        <Route element={<MainLayout />}>
          <Route path={routes.default} element={<HomePage />} />
          <Route path={routes.main} element={<HomePage />} />
          <Route path={routes.products} element={<ProductsPage />} />
          <Route path={routes.sale} element={<SalePage />} />
          <Route path={routes.ss} element={<ProductsPage />} />
          <Route path={routes.fw} element={<ProductsPage />} />
          <Route path={routes.pants} element={<ProductsPage />} />
          <Route path={routes.tshirt} element={<ProductsPage />} />
          <Route path={routes.collection} element={<ProductsPage />} />
          <Route path={routes.community} element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Community Page Coming Soon</h1></div>} />
        </Route>
  
        {/* 404 Catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
  
      </Routes>
    );
  };
  
  export default Router;