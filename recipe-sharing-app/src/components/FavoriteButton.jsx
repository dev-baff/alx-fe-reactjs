import React from 'react';
import useRecipeStore from '../recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const { addFavorite, removeFavorite, isFavorite } = useRecipeStore();
  const favorited = isFavorite(recipeId);

  const handleToggleFavorite = () => {
    if (favorited) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      style={{
        background: favorited ? '#ff4757' : '#f1f2f6',
        color: favorited ? 'white' : '#2f3542',
        border: 'none',
        borderRadius: '20px',
        padding: '8px 16px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
    >
      {favorited ? '❤️ Favorited' : '🤍 Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
