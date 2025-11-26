import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isauthenticated } = useSelector((state) => state.auth);

  if (!isauthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
