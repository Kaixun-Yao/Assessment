import React from "react";
import Student from "./student";
//import "./style.css"

export default function StudentList(props){

    return(
        <div>
            {props.student_list.map((student)=>
                    <Student key={student.id} calAvr={props.calAvr} student = {student} search_tag = {props.search_tag} search_name = {props.search_name}/>
                )}
        </div>
    )
}