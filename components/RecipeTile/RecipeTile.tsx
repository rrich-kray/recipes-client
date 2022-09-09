import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { style } from "@mui/system";

const RecipeTile = ({ recipe, setActiveRecipe }) => {
    return (
        <div className={styles.recipeTile}>
            <div className={styles.recipeImage}>
                <img src={recipe.image} />
                <div className={styles.overlay}>
                    <button className={styles.viewButton} onClick={() => setActiveRecipe(recipe)}>
                        View
                    </button>
                </div>
            </div>
            <div className={styles.recipeInfo}>
                <h3>{recipe.title}</h3>
                <div className={styles.infoGrid}>
                    <span><span style={{fontStyle: "italic"}}>Ready time:</span>{recipe.readyInMinutes} minutes</span>
                    <span><span style={{fontStyle: "italic"}}>Health Score:</span> {recipe.healthScore}</span>
                    <span><span style={{fontStyle: "italic"}}>Price Per Serving:</span> ${recipe.pricePerServing}</span>
                    <span><span style={{fontStyle: "italic"}}>Calories:</span> ~{Math.ceil(recipe.nutrition.nutrients[0].amount)}</span>
                </div>
            </div>
        </div>
    )
}

export default RecipeTile