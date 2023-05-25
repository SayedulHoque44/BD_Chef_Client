import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Provider/ContextProvider";

const LogIn = () => {
  const { auth, logIn } = useContext(AuthProvider);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.state?.visitPath || "/";

  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  //   console.log(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    logIn(email, pass)
      .then((res) => {
        setError("");
        const loggedUser = res.user;
        form.reset();
        navigate(path, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  const handleGoogleIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        // console.log(res.user);
        navigate(path, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  const handleGitHubIn = () => {
    console.log("sdf");
    signInWithPopup(auth, gitHubProvider)
      .then((res) => {
        // console.log(res.user);
        navigate(path, { replace: true });
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div>
              <p>
                SignUp Yet ?{" "}
                <Link className="text-blue-400" to={"/register"}>
                  Register Now
                </Link>
              </p>
            </div>
            <p className="text-red-500">{error && error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button onClick={handleGoogleIn} className="btn btn-warning my-2">
            Google In
          </button>
          <button onClick={handleGitHubIn} className="btn btn-secondary">
            GitHub In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
