import React from 'react';
//@ts-ignore
import styles from './Introduction.module.css'

function Introduction({RecipeData}){  
    const {name,description,preparationTime} = RecipeData
    return (
      <>
        <img src="/images/image-omelette.jpeg" alt="simple omellete recipe" className={styles.image}/>
        <p className={styles.title}>{name}</p>
        <p className = {styles.description}>{description}</p>
        <div className={styles.preparationTime}>
          <p>Preparation Time</p>
          <ul>
            <li>Total : {preparationTime.totalTime}</li>
            <li>Preparation : {preparationTime.preparationTime}</li>
            <li>Cooking : {preparationTime.cookTime}</li>
          </ul>
        </div>
      </>
    )
  }
 
  export default Introduction;
  