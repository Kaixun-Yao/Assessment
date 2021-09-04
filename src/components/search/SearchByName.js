import React from "react";

export default function SearchByName(props){


    return(
        <input className="input-name" placeholder="Search by name" onChange={e=>props.setInput(e.target.value)}/>
        
    )
}