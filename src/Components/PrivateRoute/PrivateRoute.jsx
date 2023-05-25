import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../../Provider/ContextProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      to={`/logIn`}
      state={{ visitPath: location.pathname }}
      replace={true}
    />
  );
};

export default PrivateRoute;
