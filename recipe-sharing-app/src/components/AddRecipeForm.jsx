
import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (title.trim() && description.trim()) {
      addRecipe({ 
        id: Date.now(), 
        title, 
        description,
        ingredients: ingredients.split(',').map(ing => ing.trim()).filter(ing => ing)
      });
      setTitle('');
      setDescription('');
      setIngredients('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
      <h2>Add New Recipe</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          style={{ width: '100%', padding: '8px', minHeight: '100px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (comma-separated)"
          style={{ width: '100%', padding: '8px' }}
        />
        <small style={{ color: '#666' }}>Example: flour, sugar, eggs, butter</small>
      </div>
      <button 
        type="submit"
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;

