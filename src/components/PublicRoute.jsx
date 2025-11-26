import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { isauthenticated } = useSelector((state) => state.auth);

  if (isauthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
