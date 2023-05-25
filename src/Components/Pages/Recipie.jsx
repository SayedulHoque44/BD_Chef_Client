import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipieCard from "./RecipieCard";

const Recipie = () => {
  const chef = useLoaderData();
  const {
    chef_name,
    chef_picture,
    years_of_experience,
    number_of_recipes,
    likes,
    description,
    id,
    recipes,
  } = chef;
  //   console.log(chef);
  return (
    <>
      <div className="card lg:card-side bg-base-100 w-2/3 mx-auto">
        <figure>
          <img src={chef_picture} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p>{description}</p>
          <p className="text-orange-500">Experience : {years_of_experience}</p>
          <p className="text-purple-500">Recipie : {number_of_recipes}</p>
          <p className="text-blue-400">Likes : {likes}</p>
        </div>
      </div>
      <div className="py-10 grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {recipes.map((rec, index) => (
          <RecipieCard key={index} recipie={rec} />
        ))}
      </div>
    </>
  );
};

export default Recipie;
