import React from "react"
import UseMemo from "./components/UseMemo"
import { SimpleComponent,HigherOrderComponent } from "./components/HigherOrderComponent"

const App=()=>{

    // To run Higher Order Component
   const EnhancedComponent= HigherOrderComponent(SimpleComponent)

    return(
        <div>
            {/* <UseMemo/> */}
           <SimpleComponent content="Hi I am Priya"/>
           <EnhancedComponent content="Hi I am enhanced Priya"/>
        </div>
       
    )
}

export default App