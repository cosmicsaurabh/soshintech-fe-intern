import React from "react";

const Dropdown = ({ items }) => (
  <div style={styles.dropdownContainer}>
    {items.map((item, index) => (
      <div key={index} style={styles.dropdownItem}>
        {item.desc}
      </div>
    ))}
  </div>
);

export default Dropdown;

const styles = {
  dropdownContainer: {
    position: 'absolute', 
    top: '100%', 
    right: 0, 
    backgroundColor: 'white',
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
    borderRadius: '0.375rem',
    padding: '0.5rem',
    minWidth: '200px', 
    zIndex: 10,
    overflow: 'hidden',
  },
  dropdownItem: {
    padding: '0.75rem 1rem', 
    cursor: 'pointer',
    whiteSpace: 'nowrap', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis', 
    fontSize: '0.875rem',
    color: '#374151',
    transition: 'background-color 0.2s ease',
  },
  dropdownItemHover: {
    backgroundColor: '#f3f4f6', 
  },
};

