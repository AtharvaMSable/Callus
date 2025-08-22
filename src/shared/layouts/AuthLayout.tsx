// Auth pages layout (login, signup, etc.)
import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="font-pretendard min-h-screen w-full">
      {children || <Outlet />}
    </div>
  );
};

export default AuthLayout;
