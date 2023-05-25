import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    chef_name,
    chef_picture,
    years_of_experience,
    number_of_recipes,
    likes,
    description,
    id,
  } = chef;
  //   console.log(chef);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <LazyLoad height={250}>
          <img
            style={{ height: "250px", width: "250px", objectFit: "cover" }}
            src={chef_picture}
            alt="Shoes"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {chef_name}
          <div className="badge badge-secondary">
            {years_of_experience} Experience
          </div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Likes {likes}</div>
          <div className="badge badge-outline">Recipie {number_of_recipes}</div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/recipie/${id}`} className="btn btn-primary">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
