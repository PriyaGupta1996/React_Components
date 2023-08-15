import React ,{useContext} from 'react'
import { ThemeContext } from './ThemeSwitcher'
import Child2Theme from './Child2Theme'

export const Child1Theme =()=>{
    const {theme,setTheme} = useContext(ThemeContext)

    const themehandler=()=>{
        if (theme==="grey"){
            setTheme("black")
        }
        else  setTheme("grey")
    }
    return (
        <div>
            <h1 style={{color:theme}}>Hi, I am Child 1</h1>
            <button onClick={themehandler}> Switch Theme from Child 1</button>
            <Child2Theme/>
        </div>
    )
}