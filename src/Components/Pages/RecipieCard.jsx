import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipieCard = ({ recipie }) => {
  const [fav, setFav] = useState(false);
  //   console.log(recipie);
  const { cooking_method, ingredients, rating, recipe_name } = recipie;
  const notify = () => toast("Added To Favrouit");

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div>
          <h2 className="card-title">
            {recipe_name}
            <div className="badge badge-secondary">
              Rating : {rating} <small></small>
            </div>
          </h2>
          <button
            onClick={() => {
              setFav(!fav);
              notify();
            }}
            className="btn block text-right"
            disabled={fav}>
            <FaHeart className="text-sm my-2 cursor-pointer " />
          </button>
        </div>
        <p>{cooking_method}</p>
        <div>
          {ingredients.map((inc, index) => (
            <li key={index}>{inc}</li>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipieCard;
