/** components/ContextProvider.js */

import React, {useState} from 'react';
import DarkModeContext from 'context/DarkModeContext';

const ContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(darkMode => !darkMode);
  }

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default ContextProvider;
