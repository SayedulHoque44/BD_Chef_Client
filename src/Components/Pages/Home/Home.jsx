import React from "react";
import { useLoaderData } from "react-router-dom";
import Bannar from "./Bannar";
import ChefSection from "./ChefSection";

const Home = () => {
  const chefs = useLoaderData();
  // console.log(chefs);
  return (
    <>
      <Bannar />
      <ChefSection chefs={chefs} />
    </>
  );
};

export default Home;
