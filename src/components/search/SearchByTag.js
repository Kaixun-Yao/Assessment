import React from "react";

export default function SearchByTag(props){


    return(
        <input placeholder="Search by tag" onChange={e=>props.setInput(e.target.value)}/>
        
    )
}