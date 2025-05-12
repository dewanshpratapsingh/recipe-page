import React  from "react";
//@ts-ignore
import Style from "./Ingredients.module.css"

export default function Ingredients({IngredientsData}){
    
    const Ingredients = IngredientsData.map((ingredient,index)=>(
        <li key={index}>{ingredient}</li>
    ))

    return(
        <>
         <p className={Style.title}>Ingredients</p>
         <ul className={Style.ingredientsList}>
            {Ingredients}
        </ul>
        </>
    )
}