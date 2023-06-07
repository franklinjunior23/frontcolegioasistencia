import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function Privateroute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate replace to={"/login"} />;
}
