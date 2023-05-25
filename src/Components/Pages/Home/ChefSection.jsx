import React from "react";
import ChefCard from "./ChefCard";

const ChefSection = ({ chefs }) => {
  //   console.log(chefs);
  return (
    <div className="py-20">
      <h1 className="text-center text-5xl font-semibold">Our Popular Chefs</h1>
      <div className="grid md:grid-cols-3 gap-4 py-10">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
