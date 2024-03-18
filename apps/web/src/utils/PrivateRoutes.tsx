import { useEffect } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, []);
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
