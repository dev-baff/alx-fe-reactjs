import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Get full recipe objects for favorited IDs
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); // Remove any undefined entries

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>My Favorites ❤️</h2>
      
      {favoriteRecipes.length === 0 ? (
        <p style={{ color: '#666' }}>
          No favorite recipes yet. Start adding some by clicking the heart icon on recipes!
        </p>
      ) : (
        <div>
          <p style={{ color: '#666', marginBottom: '15px' }}>
            You have {favoriteRecipes.length} favorite recipe(s)
          </p>
          {favoriteRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                marginBottom: '20px',
                padding: '15px',
                border: '2px solid #e91e63',
                borderRadius: '5px',
                backgroundColor: '#fce4ec'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginTop: 0, color: '#c2185b' }}>{recipe.title}</h3>
                  <p style={{ color: '#666' }}>
                    {recipe.description.length > 150
                      ? `${recipe.description.substring(0, 150)}...`
                      : recipe.description}
                  </p>
                </div>
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#e91e63',
                    marginLeft: '10px'
                  }}
                  title="Remove from favorites"
                >
                  💔
                </button>
              </div>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#e91e63',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '3px'
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;