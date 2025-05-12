import React from "react";
import Style from  "./Instructions.module.css"
function Instructions({InstructionsData}){
    
    const instructionSteps = InstructionsData.map((instruction, index) => (
        <li key={index}>{instruction}</li>
      ));
    return (
        <>
            <p className={Style.title}>Instructions</p>
            <ul className={Style.instructionsList}>
                {instructionSteps}
            </ul>
        </>
    )
}

export default Instructions;