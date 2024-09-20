import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiGrid,
  FiUsers,
  FiCalendar,
  FiUser,
  FiBriefcase,
  FiHeadphones,
  FiSettings,
  FiX,
} from "react-icons/fi";
import IconButton from "../../utils/IconButton";
import VasitumLogo from "../../assets/images/VasitumLogo.png";
import { useResponsive } from "../../context/ResponsiveContext";

const SidebarMenu = () => {
  const {
    isSidebarOpen,
    isMobile,
    handleToggleSidebar
  } = useResponsive();

  const sidebarWidth = isSidebarOpen 
  ? (isMobile ? "12rem"  :  "16rem")
  : (isMobile ? "0" : "4rem" );
    
  const navigate = useNavigate();
  const location = useLocation();

  const styles = {
    sidebarContainer: {
      backgroundColor: "white",
      borderRight: "1px solid #e5e7eb",
      overflowY: "auto",
      transition: "all 0.3s ease-in-out",
      position: isMobile ? "fixed" : "static",
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 20,
      width: sidebarWidth,
      
    },
    logoContainer: {
      padding: "1rem",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logoWrapper: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    logo: {
      width: "2.5rem",
    },
    logoText: {
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "#1e3a8a",
      marginLeft: "0.5rem",
    },
    menuNav: {
      marginTop: "1rem",
    },
    menuSection: {
      padding: "0 1rem",
      marginBottom: "0.5rem",
      fontSize: "0.75rem",
      fontWeight: 600,
      color: "#9ca3af",
      textTransform: "uppercase",
    },
    menuItemContainer: {
      padding: "0.5rem 1rem",
      display: "flex",
      alignItems: "center",
      fontSize: "0.875rem",
      color: "#374151",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    activeMenuItem: {
      color: "#ef4444",
      backgroundColor: "#f3f4f6",
    },
    menuItemIcon: {
      marginRight: "0.75rem",
    },
    closeButton: {
      color: "#6b7280",
      background: "red",
      border: "none",

      cursor: "pointer",
    },
  };

  const menuItems = [
    {
      section: "Main Menu",
      items: [
        { to: "/dashboard", icon: FiGrid, label: "Dashboard" },
        { to: "/recruitment", icon: FiUsers, label: "Recruitment" },
        { to: "/schedule", icon: FiCalendar, label: "Schedule" },
        { to: "/employee", icon: FiUser, label: "Employee" },
        { to: "/department", icon: FiBriefcase, label: "Department" },
      ],
    },
    {
      section: "Other",
      items: [
        { to: "/support", icon: FiHeadphones, label: "Support" },
        { to: "/settings", icon: FiSettings, label: "Settings" },
      ],
    },
  ];

  const MenuItem = ({ icon: Icon, children, to }) => {
    const isActive = location.pathname === to;

    return (
      <div
        style={{
          ...styles.menuItemContainer,
          ...(isActive ? styles.activeMenuItem : {}),
        }}
        onClick={() => navigate(to)}
      >
        <span style={styles.menuItemIcon}>
          <IconButton icon={Icon} size={23} />
        </span>
        {(isSidebarOpen ) && children}
      </div>
    );
  };

  return (
    <div style={styles.sidebarContainer}>
      <div style={styles.logoContainer}>
        <div style={styles.logoWrapper} onClick={() => navigate("/")}>
          <img src={VasitumLogo} alt="Vasitum Logo" style={styles.logo} />
          {isSidebarOpen && <span style={styles.logoText}>Vasitum</span>}
        </div>
        {isMobile && (
          <IconButton icon={FiX} size={25} onClick={handleToggleSidebar} />
        )}
      </div>
      <nav style={styles.menuNav}>
        {menuItems.map(({ section, items }) => (
          <React.Fragment key={section}>
            <h2 style={styles.menuSection}>{section}</h2>
            {items.map((item) => (
              <MenuItem key={item.to} to={item.to} icon={item.icon}>
                {item.label}
              </MenuItem>
            ))}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default SidebarMenu;
