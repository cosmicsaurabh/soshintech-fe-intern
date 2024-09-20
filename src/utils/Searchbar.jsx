import React from "react";
import { FiSearch } from "react-icons/fi";
import IconButton from "./IconButton";

const SearchBar = () => {
  return (
    <div style={styles.searchContainer}>
        <IconButton icon={FiSearch} size={23} color={"#9ca3af"} />
        <input type="text" placeholder="Search" style={styles.searchInput} />
    </div>
  );
};

export default SearchBar;
const styles = {
  searchContainer: {
    display: "flex",
    width: "50%",
    backgroundColor: "#f3f4f6",
    paddingLeft: "0.5rem",
    borderRadius: "0.5rem",
  },
  searchInput: {
    padding: "0.5rem",
    color: "#374151",
    backgroundColor: "#f3f4f6",
    borderRadius: "0.5rem",
    border: "none",
  },
};
