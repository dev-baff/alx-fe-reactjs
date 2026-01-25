import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Generate recommendations when component mounts or favorites change
  useEffect(() => {
    if (recipes.length > 0) {
      generateRecommendations();
    }
  }, [favorites, recipes, generateRecommendations]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Recommended for You 🌟</h2>
      
      {recommendations.length === 0 ? (
        <p style={{ color: '#666' }}>
          {favorites.length === 0 
            ? "Add some favorites to get personalized recommendations!"
            : "No recommendations available at the moment. Try adding more recipes!"}
        </p>
      ) : (
        <div>
          <p style={{ color: '#666', marginBottom: '15px' }}>
            Based on your favorites, you might like these recipes:
          </p>
          {recommendations.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                marginBottom: '20px',
                padding: '15px',
                border: '2px solid #ff9800',
                borderRadius: '5px',
                backgroundColor: '#fff3e0'
              }}
            >
              <h3 style={{ marginTop: 0, color: '#e65100' }}>{recipe.title}</h3>
              <p style={{ color: '#666' }}>
                {recipe.description.length > 150
                  ? `${recipe.description.substring(0, 150)}...`
                  : recipe.description}
              </p>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#ff9800',
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

export default RecommendationsList;