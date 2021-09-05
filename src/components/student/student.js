import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from "react";
//import "./style.css"


export default function Student(props){

    const [toggle,setToggle] = useState(false)//toggle for grades
    const [tags,setTags] = useState([])//array to hold tags

    //function add tag when pressing enter
    const addTag = e => {
        if(e.keyCode === 13){
            if(!tags.includes(e.target.value)){
                 const tag = e.target.value
                var temp_tags = [...tags,tag]
                setTags(temp_tags)
                e.target.value=""
            }else{
                e.target.value=""
            }
           
        }
    }

    //function to search by name and tag
    function search(){
        var search_name = false
        var search_tag = false
        //search name
        var full_name = props.student.firstName+" "+props.student.lastName
        full_name = full_name.toLowerCase()
        search_name = full_name.includes(props.search_name.toLowerCase())
        //search tag
        if(props.search_tag===""){
            search_tag=true
        }else{
            for (var i = 0 ; i<tags.length;i++){
                if (tags[i].toLowerCase().includes(props.search_tag.toLowerCase())){
                    search_tag = true
                    break
                }
            }
        }
        return search_name&&search_tag
    }

    return(
        <div className={search()?"studentContainer w-full":"hidden"} key={props.student.id}>
            
                <img className="icon" src={props.student.pic} alt={props.student.firstName}></img>
            <div>
                <h3>{props.student.firstName.toUpperCase()} {props.student.lastName.toUpperCase()}</h3>
                <ul>
                    <li>Email: {props.student.email}</li>
                    <li>Company: {props.student.company}</li>
                    <li>Skill: {props.student.skill}</li>
                    <li>Average: {props.calAvr(props.student.grades)}%</li>
                </ul>
                <div className="tags-container">
                    {tags.map((tag,index)=>
                    <span className="tag" key={index}>{tag}</span>
                    )}
                </div>
                <input className="add_tag" placeholder="Add a tag" onKeyDown={addTag}></input>
                <ul className={toggle?"":"hidden"}>
                    {props.student.grades.map((grade,index)=>
                    <li key={index}>Test {index+1}: <span className="grade">{grade}%</span></li>
                    )}
                </ul>
            </div>
            <button value={props.student.id} onClick={e=>setToggle(!toggle)}>{toggle?<FontAwesomeIcon icon={faMinus}/>:<FontAwesomeIcon icon={faPlus}/>}</button>
        </div>
    )
}