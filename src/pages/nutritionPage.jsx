import React from "react";
import Navbar from "../components/header/Navbar.component";
import Nutrition from "../components/Nutrition/nutrition.component";
import NutritionCard from "../components/nutritionpage/nutritionpage.component";

function NutritionPage() {
  return (
    <div>
      <Navbar />
      <Nutrition />
      <NutritionCard />
    </div>
  );
}

export default NutritionPage;
