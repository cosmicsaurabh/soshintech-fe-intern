import React from "react";

const IconButton = ({ icon: Icon, onClick, badge, size, color }) => (
  <button style={styles.iconButton} onClick={onClick}>
      <Icon
        style={{
          width: size,
          height: size,
          color: color,
        }}
      />
      {badge > 0 && (
        <span style={styles.badge}>
          {badge}
        </span>
      )}
  </button>
);

export default IconButton;

const styles = {
  iconButton: {
    position: "relative", 
    cursor: "pointer",
  },
  badge: {
    position: "absolute",
    top: "-5px",
    right: "-5px", 
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "0.2rem 0.4rem", 
    fontSize: "0.75rem",
    fontWeight: "bold",
    lineHeight: 1,
    minWidth: "1.2rem", 
    textAlign: "center",
  },
};
