import type { NextPage } from 'next'
import {useEffect, useState, useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import Recipe from '../components/Recipe/Recipe';
import Loading from "../components/Loading/Loading";
import RecipeGrid from "../components/RecipeGrid/RecipeGrid";
import Nav from '../components/Nav/Nav'
import styles from '../styles/Home.module.css'
import { splitAndCapitalize } from '../utils/utils';
import RecipeAccordian from '../components/RecipeAccordian/RecipeAccordian';
import RecipePage from '../components/RecipePage/RecipePage';
import Hero from '../components/Hero/Hero';
import RecipeTile from "../components/RecipeTile/RecipeTile"
import { formState, RecipeInterface } from '../utils/types';
import { SyntheticEvent } from 'react';
import _ from "lodash"


const Home: NextPage = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [recipeData, setRecipeData] = useState([]);
  const [recipeIncrement, setRecipeIncrement] = useState<RecipeInterface[]>([]);
  const [isComplexSearchVisible, setComplexSearchVisibility] = useState<boolean>(false);
  const [activeRecipe, setActiveRecipe] = useState<RecipeInterface>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recipesPerPage, setRecipesPerPage] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const complexSearch = useRef();


  // Lazy loading:
  // Establish a block quatity. How many recipes are loading in each load cycle
  // Regardless of the total number of recipes returned, only the number of recipes specified in the block quatity will be loaded into the jsx
  // Establish an event listener that will append additional recipes to the recipes state when the user scrolls to a certain point
  // Could throw the event listener on the window object

  const [formState, setFormState] = useState<formState>({
    query: 'pork',
    cuisine: '',
    excludeCuisine: '',
    diet: '',
    intolerances: '',
    equipment: '',
    includeIngredients: '',
    excludeIngredients: '',
    type: '',
    instructionsRequired: 'true',
    fillIngredients: 'false',
    addRecipeInformation: 'true',
    titleMatch: '',
    maxReadyTime: '20',
    ignorePantry: 'true',
    sort: 'calories',
    sortDirection: 'asc',
    minCarbs: '',
    maxCarbs: '',
    minProtein: '',
    maxProtein: '',
    minCalories: '',
    maxCalories: '',
    minFat: '',
    maxFat: '',
    minAlcohol: '',
    maxAlcohol: '',
    minCaffeine: '',
    maxCaffeine: '',
    minCopper: '',
    maxCopper: '',
    minCalcium: '',
    maxCalcium: '',
    minCholine: '',
    maxCholine: '',
    minCholesterol: '',
    maxCholesterol: '',
    minFluoride: '',
    maxFluoride: '',
    minSaturatedFat: '',
    maxSaturatedFat: '',
    minVitaminA: '',
    maxVitaminA: '',
    minVitaminC: '',
    maxVitaminC: '',
    minVitaminD: '',
    maxVitaminD: '',
    minVitaminE: '',
    maxVitaminE: '',
    minVitaminK: '',
    maxVitaminK: '',
    minVitaminB1: '',
    maxVitaminB1: '',
    minVitaminB2: '',
    maxVitaminB2: '',
    minVitaminB5: '',
    maxVitaminB5: '',
    minVitaminB3: '',
    maxVitaminB3: '',
    minVitaminB6: '',
    maxVitaminB6: '',
    minVitaminB12: '',
    maxVitaminB12: '',
    minFiber: '',
    maxFiber: '',
    minFolate: '',
    maxFolate: '',
    minFolicAcid: '',
    maxFolicAcid: '',
    minIodine: '',
    maxIodine: '',
    minIron: '',
    maxIron: '',
    minMagnesium: '',
    maxMagnesium: '',
    minManganese: '',
    maxManganese: '',
    minPhosphorus: '',
    maxPhosphorus: '',
    minPotassium: '',
    maxPotassium: '',
    minSelenium: '',
    maxSelenium: '',
    minSodium: '',
    maxSodium: '',
    minSugar: '',
    maxSugar: '',
    minZinc: '',
    maxZinc: '',
    offset: '',
    number: '25',
    limitLicense: '',
    ranking: ''
})

  console.log(recipeData)

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSearch = async () => {
    const response = await axios.post(`https://uqj4m59r35.execute-api.us-east-1.amazonaws.com/prod/search`, formState);
    setRecipeData(JSON.parse(response.data))
  }

  useEffect(() => {
    handleSearch()
  }, [])

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY)
    window.removeEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // const indexOfLastPost = currentPage * recipesPerPage;
  // const indexOfFirstPost = indexOfLastPost - recipesPerPage;
  // const currentRecipes = recipeData.slice(indexOfFirstPost, indexOfLastPost)

  
  // if (offset === window.innerHeight) {
  //   setCurrentPage(() => currentPage + 1)
  // }


  return (
    <>
      <div>
        <Head>
          <title>Recipes</title>
          <meta name="description" content="Recipes App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          {activeRecipe ? (
            <RecipePage activeRecipe={activeRecipe} setActiveRecipe={setActiveRecipe} />
          ) : (
          <>
            <Nav />
            <Hero
              isComplexSearchVisible={isComplexSearchVisible}
              setComplexSearchVisibility={setComplexSearchVisibility}
              handleChange={handleChange}
              handleSearch={handleSearch}
              formState={formState} 
              setFormState={setFormState} 
            />
            {recipeData.results && (
              <div className={styles.search}>
                {recipeData.results.map(recipe => (
                  <RecipeTile
                    key={recipe.title}
                    recipe={recipe}
                    setActiveRecipe={setActiveRecipe}
                  />
                ))}
              </div>
            )}
        </>
          )}
        </main>
      </div>
      {isLoading && <Loading />}
    </>
  )
}

export default Home
