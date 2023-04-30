import React from 'react'
import { useState } from 'react'

export default function App() {

 const [value,setvalue]=useState("");
 const [list,setlist]=useState([]);
 
const additem=()=>{
  
  setlist((item)=>{
    const newlist=[...list,value];
     setvalue("")
    return newlist;
  })

}

const removedata=(index)=>{
   const updatedata=list.filter((ele,i)=>{
    return  index != i;
   })
   setlist(updatedata);
}


const deleteall=()=>{
  setlist([]);
}

  return (
    <>
       
       <div className='container'>
       <div className='header'>TO_DO LIST</div>
         <input type='text' value={value} onChange={(e)=>setvalue(e.target.value)} placeholder='Add a Item' />

         
       <button onClick={additem}>click</button>
         

         

         {

    list !=[] &&
list.map((data,i)=>{
  return(
    <>
      <p key={i}>
      <div className='listdata'>{data}</div>
      <div className='btn-postion'><button onClick={()=>removedata(i)}>Delete</button></div>
 
      </p>
      
    </>
  )
})
}
  
 {
  list.length >=1 &&
  <button onClick={deleteall}>DeleteAll</button>

 }         
         </div>

    
          

    </>
      )
}
