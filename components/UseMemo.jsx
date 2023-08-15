import React, { useEffect } from 'react'
import {useState} from 'react'
import moment from 'moment'

export default function UseMemo() {
  const [count,setCount]= useState(0);
 const [time,setTime]=useState(moment().format('hh:mm:ss A'))
 // const[doubeCount,setDoubeCount]= useState(0);
  // let doubeCount=0;
  // useEffect(()=>{
  //   console.log("i am called for",count)
  //   doubeCount=count*2
  //   console.log("double count",doubeCount)
  // },[count])

const doubeCount = React.useMemo(()=>{
  console.log(`I am called here for ${count}`)
  return count*2;
},[count])

useEffect(()=>{
  setTimeout(()=>{
    setTime(moment().format('hh:mm:ss A'))
  },1000)
},[time])

  return (
    <div className="App">
      Time {time}
      <form style={{display:"flex",flexDirection:"column",width:"20%"}}>
      <input type = "text" value={count} />
      <button onClick={(e)=>{e.preventDefault(); setCount(count+1)}}> Increment </button>
      <button onClick={(e)=>{e.preventDefault();setCount(count-1)}}> Decrement </button>
      <input type="text" value={doubeCount}/>
      </form>
    </div>
  );
}
