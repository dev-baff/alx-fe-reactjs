import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <button 
        onClick={() => navigate('/')}
        style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer' }}
      >
        ← Back to Recipes
      </button>
      
      <div style={{ marginBottom: '30px' }}>
        <h1>{recipe.title}</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>{recipe.description}</p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2>Edit Recipe</h2>
        <EditRecipeForm recipe={recipe} />
      </div>

      <div>
        <h2>Delete Recipe</h2>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;