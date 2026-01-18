function MainContent() {
  return (
    <main style={{ 
      padding: '40px 20px', 
      minHeight: '60vh',
      backgroundColor: '#ffffff',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        color: '#2c3e50', 
        fontSize: '28px', 
        marginBottom: '20px',
        borderBottom: '3px solid #3498db',
        paddingBottom: '10px'
      }}>
        Welcome to My Application
      </h2>
      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.8', 
        color: '#555',
        marginBottom: '15px'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.6', 
        color: '#666',
        backgroundColor: '#f0f8ff',
        padding: '15px',
        borderRadius: '5px',
        borderLeft: '4px solid #3498db'
      }}>
        This is the main content area where you can add more information about your favorite cities and experiences.
      </p>
    </main>
  );
}

export default MainContent;