import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Receipe'

const App = () => {

  const APP_ID = 'cf44b4ac'
  const APP_KEY = 'a87038e2176a2e02c01ff16bedb8e3a2'
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch ] = useState('');
  const [query, setQuery] = useState('chicken')

  const updateSearch = e =>{
    setSearch(e.target.value)
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
  }
  useEffect(() =>{
    getRecipes();
  }, [query]);
  
  const getRecipes  = async () =>{
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
   setRecipe(data.hits)
  }
  return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit' >Submit</button>
      </form>
      <div className="recipe">
        {recipes.map(recipe =>(
          <Recipe 
          key ={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
