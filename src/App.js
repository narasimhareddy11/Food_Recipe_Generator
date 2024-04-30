import React, { useState, useEffect, useMemo } from 'react';
import Select from "react-select"
import Recipe from './components/food';
import NavBar  from './components/Navbar';
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import FormComponent from './components/FormComponent';
import './App.css';


const App = () => {

  const app_id = "158540c6";
  const app_key = "4cc951f3ecf74138534e62890c0537ce";

  const mealtypeoptions = [
    { value: '', label: 'anything' },
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Lunch', label: 'Lunch' },
    { value: 'Dinner', label: 'Dinner' },
  ];

  const dietoptions = [
    { value: '', label: 'anything' },
    { value: 'balanced', label: 'balanced' },
    { value: 'high-fiber', label: 'high-fiber' },
    { value: 'high-protein', label: 'high-protein' },
    { value: 'low-fat', label: 'low-fat' },
    { value: 'low-carb', label: 'low-carb' },
    { value: 'low-sodium', label: 'low-sodium' },
  ];

  const dishtypeoptions = [
    { value: '', label: 'anything' },
    { value: 'Biscuits and cookies', label: 'balanced' },
    { value: 'Bread', label: 'Bread' },
    { value: 'Main course', label: 'Main course' },
    // { value: 'Pancakes', label: 'Pancakes' },
    { value: 'Desserts', label: 'Desserts' },
    { value: 'Soup', label: 'Soup' },
    { value: 'Starter', label: 'Starter' },
  ];

  const cuisinetypeoptions = [
    { value: '', label: 'anything' },
    { value: 'Indian', label: 'Indian' },
    { value: 'American', label: 'American' },
    { value: 'Asian', label: 'Asian' },
    { value: 'French', label: 'French' },
    { value: 'Mediterranean', label: 'Mediterranean' },
    { value: 'Middle%20Eastern', label: 'Middle Eastern' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Central%20Europe', label: 'Central Europe' },
    { value: 'Eastern%20Europe', label: 'Eatern Europe' },
    { value: 'British', label: 'British' },
    { value: 'Mexcian', label: 'Mexican' },
  ];
  
  const [recipes, setrecipes] = useState([])
  const [search, setsearch] = useState('')
  const [submit,setsubmit] = useState('')
  const [meal,setmeal] = useState('')
  const [mealty,setmealty] = useState('')
  const [diet,setdiet] = useState('')
  const [deitty,setdietty] = useState('')
  const [dish,setdish] = useState('')
  const [dishty,setdishty] = useState('')
  const [cuisine,setcuisine] = useState('')
  const [cuisinety,setcuisinety] = useState('')

  useEffect(() => {
    getreciepe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[submit])

  const getreciepe = async () =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${submit}&app_id=${app_id}&app_key=${app_key}${deitty}${cuisinety}${mealty}${dishty}`)
    const data = await response.json()
    console.log(data.hits)
    
    setrecipes(data.hits)
  } 

  const research = (e) =>{
    
    setsearch(`${e.target.value}`)
  
  } 

  const mealtype = (selectedOption) =>{

    if (selectedOption.value === '' ){
      setmeal(' ') 
    }else {
    setmeal(`&mealType=${selectedOption.value}`)
    }
  }

  const diettype = (selectedOption) =>{

    if (selectedOption.value === '' ){
      setdiet(' ') 
    }else {
      setdiet(`&diet=${selectedOption.value}`)
    }
  }

  const dishtype = (selectedOption) =>{

    if (selectedOption.value === '' ){
      setdish(' ') 
    }else {
      setdish(`&dishType=${selectedOption.value}`)
    }
  }

  const cuisinetype = (selectedOption) =>{

    if (selectedOption.value === '' ){
      setcuisine(' ') 
    }else {
      setcuisine(`&cuisineType=${selectedOption.value}`)
    }
  }

  const getsubmit = e =>{
    e.preventDefault(search)
    setsubmit(`${search}`)
    setmealty(`${meal}`)
    setdietty(`${diet}`)
    setdishty(`${dish}`)
    setcuisinety(`${cuisine}`)
    setsearch('')
  }

 
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('');

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);


  const sortRecipes = (option) => {
    setSortBy(option);
    let sortedRecipes = [...recipes];
    if (option === 'name') {
      sortedRecipes.sort((a, b) => a.recipe.label.localeCompare(b.recipe.label));
    } else if (option === 'calories') {
      sortedRecipes.sort((a, b) => a.recipe.calories - b.recipe.calories);
    }
    setrecipes(sortedRecipes);
  };

 
  const toggleFavorite = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[index].favorite = !updatedRecipes[index].favorite;
    setrecipes(updatedRecipes);
  };
  const [debouncedSearch, setDebouncedSearch] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); 
    return () => clearTimeout(timer);
  }, [search]);

  const apiUrl = useMemo(() => {
    return `https://api.edamam.com/api/recipes/v2?type=public&q=${debouncedSearch}&app_id=${app_id}&app_key=${app_key}${deitty}${cuisinety}${mealty}${dishty}`;
  }, [debouncedSearch, deitty, cuisinety, mealty, dishty]);

  // Fetch recipes
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setrecipes(data.hits);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    getRecipes();
  }, [apiUrl]);

  return (
    <div className="h-s grid place-items-center bg-container text-white">
      <NavBar/>

      <div className='mainform'>
        <FormComponent mealtypeoptions={mealtypeoptions} dietoptions={dietoptions} dishtypeoptions={dishtypeoptions} cuisinetypeoptions={cuisinetypeoptions}  research={research} mealtype={mealtype} dishtype={dishtype} diettype={diettype} getsubmit={getsubmit} cuisinetype={cuisinetype}  sortBy={sortBy} sortRecipes={sortRecipes} Select={Select}/>
      </div>

      <div className='output_recipe'>
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.calories} 
        title ={recipe.recipe.label} 
        calories = {recipe.recipe.calories} 
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
      <Pagination recipes={recipes} setCurrentPage={setCurrentPage} currentPage={currentPage} recipesPerPage={recipesPerPage}/>

      <div className='output_recipe'>
        {currentRecipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            favorite={recipe.favorite || false}
            toggleFavorite={() => toggleFavorite(index)}
          />
        ))}
      </div>
      
    <Footer/>
    </div>
  );
}

export default App