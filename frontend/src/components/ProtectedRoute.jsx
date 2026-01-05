import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="spinner"></div>
        <p className="text">Checking authentication...</p>
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
