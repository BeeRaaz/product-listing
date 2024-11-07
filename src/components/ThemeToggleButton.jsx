import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggleButton = ({ toggleBtnText = "" }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);
  
  return (
    <>
    <button className="w-5 h-5 rounded-full bg-black dark:bg-white" onClick={toggleTheme}>{toggleBtnText}</button>
    </>
  );
};

export default ThemeToggleButton;
