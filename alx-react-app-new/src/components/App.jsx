import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice Johnson" 
        age="25" 
        bio="Loves hiking and photography. Travel enthusiast exploring the world one city at a time."
      />
      <UserProfile 
        name="Bob Smith" 
        age="30" 
        bio="Software developer passionate about creating amazing user experiences."
      />
      <Footer />
    </div>
  )
}

export default App