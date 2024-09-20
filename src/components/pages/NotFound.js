import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#b91c1c',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  text: {
    color: '#6b7280',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.5rem 1.5rem',
    color: 'white',
    backgroundColor: '#3b82f6',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#2563eb',
  },
};

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/Dashboard');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Page Not Found</h2>
      <p style={styles.text}>Oops! The page you are looking for does not exist.</p>
      <button
        style={styles.button}
        onClick={handleGoHome}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
      >
        Go Back to Dashboard
      </button>
    </div>
  );
};

export default NotFound;
