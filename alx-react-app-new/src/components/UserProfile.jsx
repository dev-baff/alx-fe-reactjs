function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '20px', 
      margin: '20px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: 'blue', 
        fontSize: '24px', 
        marginBottom: '10px',
        fontWeight: 'bold'
      }}>
        {props.name}
      </h2>
      <p style={{ 
        color: '#666', 
        fontSize: '16px', 
        margin: '8px 0',
        lineHeight: '1.5'
      }}>
        Age: <span style={{ fontWeight: 'bold', color: '#444' }}>{props.age}</span>
      </p>
      <p style={{ 
        color: '#555', 
        fontSize: '14px', 
        fontStyle: 'italic',
        marginTop: '12px',
        lineHeight: '1.6'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;