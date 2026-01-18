function Services() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '3px solid #3498db', paddingBottom: '10px' }}>
        Our Services
      </h1>
      <ul style={{ 
        listStyle: 'none', 
        padding: '0', 
        marginTop: '30px' 
      }}>
        <li style={{ 
          padding: '15px', 
          margin: '10px 0', 
          backgroundColor: '#f8f9fa', 
          borderLeft: '4px solid #3498db',
          fontSize: '1.1rem'
        }}>
          Technology Consulting
        </li>
        <li style={{ 
          padding: '15px', 
          margin: '10px 0', 
          backgroundColor: '#f8f9fa', 
          borderLeft: '4px solid #3498db',
          fontSize: '1.1rem'
        }}>
          Market Analysis
        </li>
        <li style={{ 
          padding: '15px', 
          margin: '10px 0', 
          backgroundColor: '#f8f9fa', 
          borderLeft: '4px solid #3498db',
          fontSize: '1.1rem'
        }}>
          Product Development
        </li>
      </ul>
    </div>
  );
}

export default Services;