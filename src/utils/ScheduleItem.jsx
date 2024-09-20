import React from 'react';


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
  },
  title: (isPriority) => ({
    fontSize: '14px',
    fontWeight: '500',
    color: isPriority ? '#3182ce' : '#000', 
  }),
  time: {
    fontSize: '12px',
    color: '#6b7280', 
  },
  button: {
    color: '#9ca3af', 
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

const ScheduleItem = ({ title, time, isPriority }) => {
  return (
    <div style={styles.container}>
      <div>
        <h4 style={styles.title(isPriority)}>{title}</h4>
        <p style={styles.time}>{time}</p>
      </div>
      <button style={styles.button}>...</button>
    </div>
  );
};

export default ScheduleItem;
