import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
                <h1>Recipe Sharing Application</h1>
                
                <div style={{ marginBottom: '30px' }}>
                  <AddRecipeForm />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h2>Search Recipes</h2>
                  <SearchBar />
                </div>

                <RecipeList />

                <FavoritesList />

                <RecommendationsList />
              </div>
            } 
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;