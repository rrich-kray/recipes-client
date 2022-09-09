import { SyntheticEvent } from "react"

export interface formState {
    query: string,
    cuisine: string,
    excludeCuisine: string,
    diet: string,
    intolerances: string,
    equipment: string,
    includeIngredients: string,
    excludeIngredients: string,
    type: string,
    instructionsRequired: string,
    fillIngredients: string,
    addRecipeInformation: string,
    titleMatch: string,
    maxReadyTime: string,
    ignorePantry: string,
    sort: string,
    sortDirection: string,
    minCarbs: string,
    maxCarbs: string,
    minProtein: string,
    maxProtein: string,
    minCalories: string,
    maxCalories: string,
    minFat: string,
    maxFat: string,
    minAlcohol: string,
    maxAlcohol: string,
    minCaffeine: string,
    maxCaffeine: string,
    minCopper: string,
    maxCopper: string,
    minCalcium: string,
    maxCalcium: string,
    minCholine: string,
    maxCholine: string,
    minCholesterol: string,
    maxCholesterol: string,
    minFluoride: string,
    maxFluoride: string,
    minSaturatedFat: string,
    maxSaturatedFat: string,
    minVitaminA: string,
    maxVitaminA: string,
    minVitaminC: string,
    maxVitaminC: string,
    minVitaminD: string,
    maxVitaminD: string,
    minVitaminE: string,
    maxVitaminE: string,
    minVitaminK: string,
    maxVitaminK: string,
    minVitaminB1: string,
    maxVitaminB1: string,
    minVitaminB2: string,
    maxVitaminB2: string,
    minVitaminB5: string,
    maxVitaminB5: string,
    minVitaminB3: string,
    maxVitaminB3: string,
    minVitaminB6: string,
    maxVitaminB6: string,
    minVitaminB12: string,
    maxVitaminB12: string,
    minFiber: string,
    maxFiber: string,
    minFolate: string,
    maxFolate: string,
    minFolicAcid: string,
    maxFolicAcid: string,
    minIodine: string,
    maxIodine: string,
    minIron: string,
    maxIron: string,
    minMagnesium: string,
    maxMagnesium: string,
    minManganese: string,
    maxManganese: string,
    minPhosphorus: string,
    maxPhosphorus: string,
    minPotassium: string,
    maxPotassium: string,
    minSelenium: string,
    maxSelenium: string,
    minSodium: string,
    maxSodium: string,
    minSugar: string,
    maxSugar: string,
    minZinc: string,
    maxZinc: string,
    offset: string,
    number: string,
    limitLicense: string,
    ranking: string
}

export interface formStateString {
    [key: string]: string
}

export interface Ingredients {
    id: number,
    name: string, 
    localizedName: string,
    image: string
}

export interface steps {
    number: number,
    step: string,
    ingredients: Ingredients[],
    equipment: string[]
}

export interface AnalyzedInstructions {
    name: string
    steps: steps[]
}

export interface Nutrients {
    name: string,
    amount: number,
    units: string
}

export interface RecipeInterface {
    aggregateLikes: number,
    analyzedInstructions: AnalyzedInstructions[],
    cheap: boolean,
    cookingMinutes: number,
    creditsText: any,
    cuisines: any[],
    dairyFree: boolean,
    diets: any[],
    dishtypes: string[],
    gaps: string,
    glutenFree: boolean,
    healthScore: number,
    id: number,
    image: string,
    imageType: string,
    lowFodmap: boolean,
    nutrition: Nutrients[],
    occasions: any[],
    preparationMinutes: number,
    pricePerServing: number,
    readyInMinutes: number,
    servings: number,
    sourceName: any,
    sourceUrl: string,
    summary: string,
    sustainable: boolean,
    title: string,
    vegan: boolean,
    vegetarian: boolean,
    veryHealthy: boolean,
    veryPopular: boolean,
    weightWatcherSmartPoints: number
}

export interface HeroProps {
    isComplexSearchVisible: boolean,
    setComplexSearchVisibility: any,
    handleChange: any,
    formState: formStateString,
    handleSearch: any
}

export interface RecipeTileProps {
    recipe: RecipeInterface,
    setActiveRecipe: any
}

export interface RecipePageProps {
    activeRecipe: RecipeInterface,
    setActiveRecipe: any
}

export interface RecipeAccordianProps {
    recipe: RecipeInterface,
    setActiveRecipe: any
}


