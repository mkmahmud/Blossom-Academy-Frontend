import React, { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../services/authService";

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // Get logged User
  const loggedUser = isLoggedIn();

  useEffect(() => {
    if (!loggedUser) {
      navigate("/auth");
    }

    setLoading(false);
  }, [loggedUser, navigate]);

  // Loading Spinner
  if (loading) {
    return (
      <div className="  h-[400px]">
        <div className="text-black text-center absolute  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <i className="fa-solid fa-spinner animate-spin text-primary text-[80px] my-4  "></i>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
