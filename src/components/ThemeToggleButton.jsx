import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggleButton = ({ toggleBtnText = "" }) => {
  const { toggleTheme } = useContext(ThemeContext);
  
  return (
    <>
    <button className="w-5 h-5 rounded-full bg-black dark:bg-white" title="Toggle Theme" onClick={toggleTheme}>{toggleBtnText}</button>
    </>
  );
};

export default ThemeToggleButton;
