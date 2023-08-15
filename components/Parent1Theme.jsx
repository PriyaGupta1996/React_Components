import React ,{useContext} from 'react'
import { ThemeContext } from './ThemeSwitcher'
import { Child1Theme } from './Child1Theme'

export const Parent1Theme =()=>{
    const {theme,setTheme} = useContext(ThemeContext)
    
    const themehandler=()=>{
        if (theme==="grey"){
            setTheme("black")
        }
        else  setTheme("grey")
    }

    return (
        <div>
            <h1 style={{color:theme}}>Hi, I am Parent 1</h1>
            <button onClick={themehandler}> Switch Theme from Parent 1</button>
            <Child1Theme/>
        </div>
    )
}