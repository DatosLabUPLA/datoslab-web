import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg px-4 py-2"
    >
      {darkMode ? "🌙 Modo Noche" : "☀️ Modo Día"}
    </button>
  );
};

export default ThemeToggle;
