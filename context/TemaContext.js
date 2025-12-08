// TemaContext.js - Deprecated (theme switching removed)
// All screens now use light mode only (white background, dark text)

import React, { createContext } from 'react';

export const ThemeContext = createContext();

// This provider is no longer used in the app
export const ThemeProvider = ({ children }) => {
  return <>{children}</>;
};
