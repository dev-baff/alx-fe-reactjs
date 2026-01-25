import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Initialize filtered recipes when recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  // Determine which recipes to display
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      
      {searchTerm && (
        <p style={{ color: '#666', marginBottom: '15px' }}>
          {filteredRecipes.length} recipe(s) found for "{searchTerm}"
        </p>
      )}

      {displayRecipes.length === 0 ? (
        <p>
          {searchTerm 
            ? `No recipes found matching "${searchTerm}". Try a different search term.`
            : 'No recipes yet. Add one below!'
          }
        </p>
      ) : (
        displayRecipes.map((recipe) => (
          <div 
            key={recipe.id} 
            style={{ 
              marginBottom: '20px', 
              padding: '15px', 
              border: '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ marginTop: 0 }}>{recipe.title}</h3>
            <p style={{ color: '#666' }}>
              {recipe.description.length > 150 
                ? `${recipe.description.substring(0, 150)}...` 
                : recipe.description
              }
            </p>
            <Link 
              to={`/recipe/${recipe.id}`}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#2196F3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '3px'
              }}
            >
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;