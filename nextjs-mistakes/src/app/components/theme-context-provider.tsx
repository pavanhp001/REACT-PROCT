"use client";
import React, { createContext, useState } from 'react'
import Product from './product';
const ThemeContext = createContext("light");  // if we remove all useState logic also its client comp becouse here we are using createContext abjct

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
        value={{
            theme,
            setTheme,
        }}
        >
          <Product/> {/* its also working as server comp */}
        {children}
    </ThemeContext.Provider>
    
  )
}
