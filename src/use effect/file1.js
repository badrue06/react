import React ,{useState,useEffect} from "react";

function File1(){
    const [nom,setNom]=useState('hiho');
    const [prenom,setPrenom]=useState('cc');
    const [age,setAge]=useState(9);
    useEffect(
        ()=>{document.title=nom + prenom + age},[nom,prenom,age]
    )



return(
    <div>
        <input type="text" onChange={(e)=>setNom(e.target.value)}/>
        <input type="text" onChange={(e)=>setPrenom(e.target.value)}/>
        <input type="text" onChange={(e)=>setAge(e.target.value)}/>
        <p>{nom + prenom +age}</p>
    </div>
)
}
export default File1;