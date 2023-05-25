import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Provider/ContextProvider";

const Register = () => {
  const { createUser } = useContext(AuthProvider);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.PhotoUrl.value;
    const email = form.email.value;
    const pass = form.password.value;
    const Cpass = form.ConPassword.value;
    if (pass === Cpass) {
      createUser(email, pass)
        .then((res) => {
          setError("");
          const loggedUser = res.user;
          // console.log(loggedUser);
          form.reset();
          //
          updateProfile(loggedUser, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              console.log("Profile updated!");
              // console.log(loggedUser);
            })
            .catch((err) => {
              console.log(err);
            });
          navigate("/");
        })
        .catch((err) => setError(err.message));
    } else {
      setError("Password Dosn't Match");
    }
    //
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                name="PhotoUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="ConPassword"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <p>
                Already Have Accout ?{" "}
                <Link className="text-blue-400" to={"/login"}>
                  LogIn Now
                </Link>
              </p>
            </div>
            <p className="text-red-500">{error && error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Reagister</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
