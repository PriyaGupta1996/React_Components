import React ,{createContext,useState} from 'react'

export const ThemeContext = createContext() //will contain shareable data

export const ThemeSwitcher = ({children})=>{
    const [theme,setTheme] = useState("grey")
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

