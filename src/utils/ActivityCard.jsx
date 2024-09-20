import React from 'react';

const ActivityCard = ({ title, date, description,actionText }) => {
  
  return (
    <div style={styles.card}>
      <p style={styles.date}>{date}</p>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <div style={styles.footer}>
        <p style={styles.activityText}>Today you made 12 activities</p>
        <button 
        style={styles.button}
        >{actionText}</button>
      </div>
    </div>
  );
};

export default ActivityCard;
const styles = {
  card: {
    backgroundColor: '#4c51bf', 
    color: '#fff',
    padding: '16px',
    borderRadius: '8px',
  },
  date: {
    fontSize: '12px',
  },
  title: {
    fontWeight: 'bold',
    marginTop: '8px',
  },
  description: {
    fontSize: '14px',
    marginTop: '8px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '16px',
  },
  activityText: {
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#f56565', 
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
  },
};
