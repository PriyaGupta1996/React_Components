import React from 'react'

export const HigherOrderComponent =(WrappedComponent)=>{
  return (props)=>{
return <div style={{color: 'green'}}>
        <WrappedComponent {...props} />
    </div>
  }
} 


export const SimpleComponent=(props)=>{
    return <div>
         {props.content}
        </div>
}