import React,{useState} from 'react';

function File1(){
  const [list,setList]=useState({nom:'badr',count:0});
  const count=list.count;
  const nom=list.nom
  function incrementer(){
    setList(prev=>{ 
      return {...list,
         count : prev.count+1 , nom : prev.nom='siiiiiiii'
      } 
     })
  }
  function decrementer(){
    setList(prev=>{ 
      return {...list,
         count : prev.count-1 , nom : prev.nom='nosiiiiiiii'
      } 
     })
  }


return(
  <div>
    <h1>tester</h1>
    <button type='button' onClick={incrementer}>+</button>
    <span>{count}</span>
    <span>{nom}</span>
    <button type='button' onClick={decrementer}>-</button>
  </div>
)
}
export default File1;