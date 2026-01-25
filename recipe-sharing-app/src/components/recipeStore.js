import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
    favorites: state.favorites.filter((favId) => favId !== id)
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) => {
      const searchLower = state.searchTerm.toLowerCase();
      const titleMatch = recipe.title.toLowerCase().includes(searchLower);
      const descriptionMatch = recipe.description.toLowerCase().includes(searchLower);
      const ingredientMatch = recipe.ingredients?.some(ing => 
        ing.toLowerCase().includes(searchLower)
      );
      
      return titleMatch || descriptionMatch || ingredientMatch;
    })
  })),
  
  // Favorites actions
  addFavorite: (recipeId) => set((state) => {
    if (state.favorites.includes(recipeId)) {
      return state; // Already a favorite
    }
    return { favorites: [...state.favorites, recipeId] };
  }),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),
  
  // Recommendations generator
  generateRecommendations: () => set((state) => {
    // Generate recommendations based on favorites
    // This is a mock implementation - in a real app, you might use more sophisticated logic
    
    if (state.favorites.length === 0) {
      // If no favorites, recommend random recipes
      const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }
    
    // Get favorite recipes
    const favoriteRecipes = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id)
    );
    
    // Extract common keywords from favorite recipes
    const keywords = favoriteRecipes
      .flatMap(recipe => 
        recipe.title.toLowerCase().split(' ')
          .concat(recipe.description.toLowerCase().split(' '))
      )
      .filter(word => word.length > 4); // Filter short words
    
    // Find recipes that match keywords but aren't already favorites
    const recommended = state.recipes
      .filter(recipe => !state.favorites.includes(recipe.id))
      .map(recipe => {
        const recipeText = (recipe.title + ' ' + recipe.description).toLowerCase();
        const matchScore = keywords.filter(keyword => 
          recipeText.includes(keyword)
        ).length;
        return { ...recipe, matchScore };
      })
      .filter(recipe => recipe.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);
    
    return { recommendations: recommended };
  })
}));

export default useRecipeStore;