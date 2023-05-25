import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../Provider/ContextProvider";

const Header = () => {
  const { user, logOut, loading } = useContext(AuthProvider);
  const navigate = useNavigate();
  // console.log(user?.photoURL);
  // console.log(user.photoURL);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          BD Chef Pro
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to={"/blogs"}>Blog</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="mr-2">
          <p>
            Hello{" "}
            <span className="text-orange-600 font-semibold">
              {user ? user.displayName : "Guest"}
            </span>{" "}
          </p>
        </div>
        <div className="dropdown dropdown-end">
          <abbr title={user?.displayName || "Guest"}>
            {!loading && user && (
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
                onClick={() => navigate("/propiles")}>
                <div className="w-10 rounded-full">
                  <img style={{ width: "100%" }} src={user?.photoURL} />
                </div>
              </label>
            )}
          </abbr>
        </div>
        {user ? (
          <button onClick={() => logOut()} className="btn bg-red-500">
            Log Out
          </button>
        ) : (
          <Link to={"/logIn"} className="btn">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
