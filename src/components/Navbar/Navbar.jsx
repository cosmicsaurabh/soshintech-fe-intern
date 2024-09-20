import React, { useState, useEffect } from "react";
import { FiBell, FiMessageSquare, FiChevronDown, FiMenu } from "react-icons/fi";
import userProfilePic from "../../assets/images/userprofilepic.jpg";
import { fetchUserData, fetchNotificationsData, fetchMessageData } from "./NavbarData";
import Dropdown from "../../utils/Dropdown";
import SearchBar from "../../utils/Searchbar";
import IconButton from "../../utils/IconButton";
import { useResponsive } from "../../context/ResponsiveContext";

const Navbar = () => {
  const { handleToggleSidebar,isMobile } = useResponsive();
  const [userData, setUserData] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setUserData(fetchUserData());
    setNotifications(fetchNotificationsData());
    setMessages(fetchMessageData());
  }, []);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav style={styles.navbarContainer}>
      <div style={styles.navbarLeftItems}>
        <div style={styles.iconsContainer}>
          <IconButton icon={FiMenu} onClick={handleToggleSidebar} size={23} />
        </div>
        <div style={styles.iconsContainer}>
          <SearchBar />
        </div>
      </div>

      <div style={styles.navbarRightItems}>
        <div style={styles.iconsContainer}>
          <IconButton
            icon={FiBell}
            size={23}
            onClick={() => handleDropdownToggle("notifications")}
            badge={notifications.length}
          />
          {activeDropdown === "notifications" && (
            <Dropdown items={notifications} />
          )}
        </div>

        <div style={styles.iconsContainer}>
          <IconButton
            icon={FiMessageSquare}
            size={23}
            onClick={() => handleDropdownToggle("messages")}
            badge={messages.length}
          />
          {activeDropdown === "messages" && (
            <Dropdown items={messages} />
          )}
        </div>

        <div style={styles.iconsContainer}>
          <div style={styles.profileContainer}>
            <img
              src={userProfilePic}
              alt="?"
              style={styles.profilePic}
              onClick={() => handleDropdownToggle("user")}
            />
            {!isMobile && <span style={styles.profileName}>{userData.username}</span>}
            <IconButton
              icon={FiChevronDown}
              onClick={() => handleDropdownToggle("user")}
              size={23}
            />
            {activeDropdown === "user" && (
              <Dropdown items={[{ desc: "Profile" }, { desc: "Settings" }, { desc: "Logout" }]} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbarContainer: {
    display: "flex",
    backgroundColor: "white",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    padding: ".5rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbarLeftItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
  navbarRightItems: {
    display: "flex",
    width: "50%",
    alignItems: "center",
    justifyContent: "flex-end", 
  },
  iconsContainer: {
    position: "relative", 
    margin: "0.5rem .7rem",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  profilePic: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    cursor: "pointer",
  },
  profileName: {
    fontWeight: 500,
    color: "#374151",
  },
};
