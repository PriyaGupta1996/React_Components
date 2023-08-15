import React from "react"
import UseMemo from "./components/UseMemo"
import { SimpleComponent,HigherOrderComponent } from "./components/HigherOrderComponent"
import { UseRefComponent } from "./components/UseRef"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { Parent1Theme } from "./components/Parent1Theme"
const App=()=>{

    // To run Higher Order Component
    //const EnhancedComponent= HigherOrderComponent(SimpleComponent)

    return(
        <div>
            {/* <UseMemo/> */}
            {/* <SimpleComponent content="Hi I am Priya"/>
            <EnhancedComponent content="Hi I am enhanced Priya"/> */}
            {/* <UseRefComponent/> */}
            <ThemeSwitcher>
                <Parent1Theme/>
            </ThemeSwitcher>
        </div>
       
    )
}

export default App