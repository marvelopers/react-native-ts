import React, { createContent, useContext } from 'react';
import type { FC } from 'react';

export type ToggleThemeContextType = {
  toggleTheme: () => void;
}
const defaultToggleThemeContext = {}
const ToggleThemeContext = createContent<ToggleThemeContextType>(defaultToggleThemeContext);

type ToggleThemeContextProps = {};
export const ToggleThemeProvider: FC<ToggleThemeContextProps> = ({ children, toggleTheme }) => {
  const value = { toggleTheme };
  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  )
}

export const useToggleTheme = () => {
  const value = useContext(ToggleThemeContext)
  return value
}
