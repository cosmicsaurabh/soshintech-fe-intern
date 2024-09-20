import React from 'react';

const StatCard = ({ title, value, subtext, bgColor, textColor }) => {
  const styles = {
    card: {
      backgroundColor: bgColor || '#ffffff', 
      padding: '16px',
      borderRadius: '8px',
    },
    title: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#4B5563', 
    },
    value: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginTop: '4px',
      color: textColor || '#000000', 
    },
    subtext: {
      fontSize: '14px',
      marginTop: '4px',
      color: textColor || '#000000', 
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.value}>{value}</p>
      <p style={styles.subtext}>{subtext}</p>
    </div>
  );
};

export default StatCard;
