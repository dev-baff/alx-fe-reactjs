function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50', 
      color: 'white', 
      textAlign: 'center', 
      padding: '20px',
      marginTop: 'auto',
      borderTop: '4px solid #3498db'
    }}>
      <p style={{ 
        margin: '5px 0', 
        fontSize: '14px',
        fontWeight: '300'
      }}>
        © 2024 My Favorite Cities
      </p>
      <p style={{ 
        margin: '5px 0', 
        fontSize: '12px',
        color: '#bdc3c7'
      }}>
        Built with React
      </p>
    </footer>
  );
}

export default Footer;