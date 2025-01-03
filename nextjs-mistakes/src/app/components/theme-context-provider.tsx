"use client";
import React, { createContext, useState } from 'react'
import Product from './product';
const ThemeContext = createContext("light");

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
        value={{
            theme,
            setTheme,
        }}
        >
            <Product/>
        {children}
    </ThemeContext.Provider>
    
  )
}
