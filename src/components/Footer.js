
import React from 'react';
import { useTheme } from '../contexts/ThemeContext'

function Footer() {

    const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <hr />
      Footer
      <div>Aktif Tema: {theme}</div>
      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default Footer