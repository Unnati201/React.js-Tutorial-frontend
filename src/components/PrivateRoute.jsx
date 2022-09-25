import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(AuthContext);

  useEffect(() => {
    if (!context?.isUserLoggedIn && !location.pathname.includes("login")) {
      navigate("/login");
    }
  }, [context?.isUserLoggedIn]);

  if (!context?.isUserLoggedIn) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Loadingg......</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
