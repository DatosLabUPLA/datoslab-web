// ThemeDropdown.tsx
import React from "react";

interface ThemeDropdownProps {
  onThemeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ThemeDropdown: React.FC<ThemeDropdownProps> = ({ onThemeChange }) => {
  return (
    <div className="navbar-end mr-auto dropdown dropdown-hover mb-1">
      <div tabIndex={0} role="button" className="btn m-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg">
        Temas
        <svg width="12px" height="12px" className="inline-block h-2 w-2 fill-current opacity-60 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul className="dropdown-content bg-base-300 rounded-lg z-[1] w-52 p-2 shadow-lg">
        {["default", "light", "dark", "retro", "aqua"].map((themeOption) => (
          <li key={themeOption}>
            <label className="cursor-pointer flex items-center gap-2">
              <input type="radio" name="theme-dropdown" className="theme-controller" value={themeOption} onChange={onThemeChange} />
              <span className="text-sm capitalize">{themeOption}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeDropdown;
