import React from "react";
import Style from  "./Nutrients.module.css"

function Nutrition({NutritionData}){
    const nutritionList = Object.keys(NutritionData).map((item)=>(
        <li key = {item}>
            {item.charAt(0).toUpperCase() + item.slice(1) + ": " + NutritionData[item]}
        </li>
    ))
    return (
    <>
        <p className={Style.title}>Nutrition Facts</p>
        <ul className={Style.nutritionList}>{nutritionList}</ul>
      </>
    )
}

export default Nutrition;
