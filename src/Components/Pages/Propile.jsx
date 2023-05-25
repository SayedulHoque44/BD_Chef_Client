import React, { useContext } from "react";
import { AuthProvider } from "../../Provider/ContextProvider";

const Propile = () => {
  const { user } = useContext(AuthProvider);
  const { displayName, email, photoURL } = user;
  console.log(user);
  return (
    <div className="card lg:card-side bg-base-100 w-2/3 mx-auto h-screen flex justify-center align-middle">
      <div>
        <figure>
          <img src={photoURL} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Name : {displayName}</h2>
          {/* <p>{}</p> */}
          <p className="text-orange-500">Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Propile;
