import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#333', 
      padding: '15px 0',
      marginBottom: '20px'
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px',
        margin: '0',
        padding: '0'
      }}>
        <li>
          <Link 
            to="/" 
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/services" 
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;