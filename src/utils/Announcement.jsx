import React from 'react';


const Announcement = ({ title, date, isPinned }) => {
  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h4 style={styles.title}>{title}</h4>
        <p style={styles.date}>{date}</p>
      </div>
      <div style={styles.actionContainer}>
        {isPinned && (
          <svg style={styles.pinIcon} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414L11 8.414V13a1 1 0 11-2 0V8.414L6.293 5.707a1 1 0 010-1.414l3-3z" />
          </svg>
        )}
        <button style={styles.button}>...</button>
      </div>
    </div>
  );
};

export default Announcement;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '12px 0',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: '500',
    fontSize: '14px',
  },
  date: {
    fontSize: '12px',
    color: '#6b7280', 
    marginTop: '4px',
  },
  actionContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px', 
  },
  pinIcon: {
    width: '16px',
    height: '16px',
    color: '#9ca3af', 
  },
  button: {
    color: '#9ca3af', 
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};