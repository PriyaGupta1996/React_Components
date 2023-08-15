import React ,{useContext} from 'react'
import { ThemeContext } from './ThemeSwitcher'

export default Child2Theme =()=>{
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <h1 style={{color:theme}}>Hi, I am Child 2</h1>
        </div>
    )
}