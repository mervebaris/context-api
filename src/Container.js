import React, {useContext} from 'react'
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { useTheme } from './contexts/ThemeContext';

function Container() {

   const { theme } = useTheme(); 


  return (
    <>
      <div className={`container ${theme}`}>
        <ChangeTheme />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default Container